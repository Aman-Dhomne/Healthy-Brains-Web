import { Options } from "../data/InputOpt";

export const Convertvaluetoint = (value) => {
    if (value === Options[0].option) {
        return 4;
    } else if (value === Options[1].option) {
        return 3;
    } else if (value === Options[2].option) {
        return 2;
    } else if (value === Options[3].option) {
        return 1;
    } else {
        return 0;
    }
}

export const reverseNum = (num) => {
    if (num === 0) {
        return 4;
    } else if (num === 1) {
        return 3;
    } else if (num === 2) {
        return 2;
    } else if (num === 3) {
        return 1;
    } else if (num === 4) {
        return 0;
    } else {
        return num;
    }
}