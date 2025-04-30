import React, { useRef, useState, useEffect } from 'react';

const songs = [
  {
    title: 'Rain and Thunderstorm Sounds',
    file: '/audios/rainthunder.mp3',
  },
  {
    title: 'Relaxing Water Flowing Sound',
    file: '/audios/river.mp3',
  },
  {
    title: 'forest sounds of birds singing relaxation',
    file: '/audios/forest.mp3',
  },
  {
    title: 'Rainfall Meditation',
    file: '/audios/rainfall.mp3',
  },
  {
    title: 'Sand and Sea  Sounds',
    file: '/audios/ocean.mp3',
  }
];

const StressReliefPlaylist = () => {
  const audioRefs = useRef([]);
  const [playStates, setPlayStates] = useState(songs.map(() => ({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
  })));

  const handlePlay = (index) => {
    const audio = audioRefs.current[index];
    if (!audio) return;

    // Pause all others
    audioRefs.current.forEach((a, i) => {
      if (i !== index && a) {
        a.pause();
        setPlayStates((prev) => {
          const copy = [...prev];
          copy[i].isPlaying = false;
          return copy;
        });
      }
    });

    audio.currentTime = playStates[index].currentTime;
    audio.play();

    setPlayStates((prev) => {
      const copy = [...prev];
      copy[index].isPlaying = true;
      return copy;
    });
  };

  const handlePause = (index) => {
    const audio = audioRefs.current[index];
    if (!audio) return;

    audio.pause();
    setPlayStates((prev) => {
      const copy = [...prev];
      copy[index].isPlaying = false;
      copy[index].currentTime = audio.currentTime;
      return copy;
    });
  };

  const skipTime = (index, seconds) => {
    const audio = audioRefs.current[index];
    if (!audio) return;
    audio.currentTime += seconds;
  };

  const handleSeek = (index, value) => {
    const audio = audioRefs.current[index];
    if (!audio) return;
    audio.currentTime = value;

    setPlayStates((prev) => {
      const copy = [...prev];
      copy[index].currentTime = value;
      return copy;
    });
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };

  const handleTimeUpdate = (index) => {
    const audio = audioRefs.current[index];
    if (!audio) return;
    setPlayStates((prev) => {
      const copy = [...prev];
      copy[index].currentTime = audio.currentTime;
      return copy;
    });
  };

  const handleLoadedMetadata = (index) => {
    const audio = audioRefs.current[index];
    if (!audio) return;
    setPlayStates((prev) => {
      const copy = [...prev];
      copy[index].duration = audio.duration;
      return copy;
    });
  };

  return (
    <div style={{ backgroundColor: '#FCEEBD', minHeight: '100vh', padding: '2rem' }}>
      <h1 className="text-4xl font-semibold text-center mb-2">Nature Soundscapes</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>
      Ocean waves, gentle rain, forest sounds – perfect for calm, focus, or sleep
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px', margin: '0 auto' }}>
        {songs.map((song, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '1rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <h2>{song.title}</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <button onClick={() => handlePlay(index)} style={buttonStyle}>▶️ Play</button>
              <button onClick={() => handlePause(index)} style={buttonStyle}>⏸️ Pause</button>
              <button onClick={() => skipTime(index, -5)} style={buttonStyle}>⏪ -5s</button>
              <button onClick={() => skipTime(index, 5)} style={buttonStyle}>⏩ +5s</button>
            </div>

            <input
              type="range"
              min="0"
              max={playStates[index].duration}
              value={playStates[index].currentTime}
              onChange={(e) => handleSeek(index, parseFloat(e.target.value))}
              style={{ width: '100%' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
              <span>{formatTime(playStates[index].currentTime)}</span>
              <span>{formatTime(playStates[index].duration)}</span>
            </div>

            <audio
              ref={(el) => (audioRefs.current[index] = el)}
              src={song.file}
              onTimeUpdate={() => handleTimeUpdate(index)}
              onLoadedMetadata={() => handleLoadedMetadata(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: '#FCEEBD',
  border: '1px solid #daa75c',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold',
  color: '#333'
};

export default StressReliefPlaylist;