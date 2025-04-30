import React from 'react'
import { AxesDirective, AxisDirective, CircularGaugeComponent, PointerDirective, PointersDirective, RangeDirective, RangesDirective, } from "@syncfusion/ej2-react-circulargauge";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const DisplayScore = () => {
    const { totalStress } = useSelector((state) => state.stress);
    
    // Determine the stress level text based on score
    const getStressLevelText = () => {
        if (totalStress <= 13) return "Low Stress";
        if (totalStress <= 26) return "Moderate Stress";
        return "High Stress";
    };
    
    // Determine progress color based on score
    const getProgressColor = () => {
        if (totalStress <= 13) return "text-green-500";
        if (totalStress <= 26) return "text-amber-500";
        return "text-red-500";
    };

    return (
        <div className="min-h-screen bg-[#fcefbe]">
            <Navbar />
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-4xl font-semibold mb-10 text-center">Your Stress Assessment Results</h1>
                
                <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
                            <CircularGaugeComponent>
                                <AxesDirective>
                                    <AxisDirective startAngle={270} endAngle={90} radius='180xpx'
                                        labelStyle={{
                                            font: {
                                                color: "red",
                                                size: "15px",
                                                fontWeight: 500,
                                            },
                                            position: "Outside",
                                        }} minimum={0} maximum={40}
                                        majorTicks={{
                                            color: "black",
                                            width: 1,
                                            height: 4,
                                            interval: 13,
                                        }}
                                    >
                                        <PointersDirective>
                                            <PointerDirective value={totalStress} cap={{ radius: 15 }} needleStartWidth={5} needleEndWidth={2}>
                                            </PointerDirective>
                                        </PointersDirective>
                                        <RangesDirective>
                                            <RangeDirective start={0} end={13} color="#22c55e">
                                            </RangeDirective>
                                            <RangeDirective start={13} end={26} color="#f59e0b"></RangeDirective>
                                            <RangeDirective start={26} end={40} color="#ef4444"></RangeDirective>
                                        </RangesDirective>
                                    </AxisDirective>
                                </AxesDirective>
                            </CircularGaugeComponent>
                        </div>
                        
                        <div className="w-full md:w-1/2 text-center md:text-left md:pl-8">
                            <h2 className="text-2xl font-semibold mb-4">Your Assessment</h2>
                            <p className="text-gray-700 mb-4">Based on your responses to our assessment questions, we've calculated your current stress level.</p>
                            
                            <div className="mb-6">
                                <p className="text-lg font-medium">Your score is: <span className={`text-2xl font-bold ${getProgressColor()}`}>{totalStress}</span></p>
                                <p className="text-lg font-medium">Stress level: <span className={`font-bold ${getProgressColor()}`}>{getStressLevelText()}</span></p>
                            </div>
                            {totalStress < 35 ? (
  <Link 
    to="/recommendations" 
    className="bg-[#daa75c] text-white px-6 py-3 rounded-md hover:bg-[#845022ad] inline-block transition-colors duration-300"
  >
    View Your Recommendations
  </Link>
) : (
  <>
    <p className="text-lg font-medium text-red-500 mb-4">
      We recommend seeking professional help.
    </p>
    <Link
      to="/counsellor"
      className="bg-[#daa75c] text-white px-6 py-3 rounded-md hover:bg-[#845022ad] inline-block transition-colors duration-300"
    >
      Get Professional Help
    </Link>
  </>
)}
                            {/* <Link 
                                to="/recommendations" 
                                className="bg-[#daa75c] text-white px-6 py-3 rounded-md hover:bg-[#845022ad] inline-block transition-colors duration-300"
                            >
                                View Your Recommendations
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayScore;