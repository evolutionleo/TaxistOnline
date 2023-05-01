export function clamp(val, min, max) {
    let _val = val;
    if (_val < min) {
        _val = min;
    }
    else if (_val > max) {
        _val = max;
    }
    
    return _val;
}

export function lerp(start, target, amount) {
    return start + (target - start) * amount;
}

export function approach(start, target, amount) {
    if (start < target) {
        return Math.min(start + amount, target);
    }
    else if (start > target) {
        return Math.max(start - amount, target);
    }
    return start;
}

export function degtorad(deg) {
    return deg * Math.PI / 180;
}

export function radtodeg(rad) {
    return rad * 180 / Math.PI;
}

export function lengthdir_x(len, dir) {
    return Math.cos(degtorad(360-dir)) * len;
}

export function lengthdir_y(len, dir) {
    return Math.sin(degtorad(360-dir)) * len;
}

export function lengthdir(len, dir) {
    return { x: lengthdir_x(len, dir), y: lengthdir_y(len, dir) };
}

export function vec_dir(x, y) {
    return 360 - (Math.atan2(y, x) / Math.PI * 180);
}

export function vec_len(x, y) {
    return Math.sqrt(x*x + y*y);
}

export function angle_normalize(a) {
    a %= 360;
    return a < 0 ? 360 + a : a;
}

export function angle_diff(a, b) {
    let res = Math.abs(angle_normalize(a) - angle_normalize(b));
    if (res > 180)
        res = 360 - res;
    return res;
}

export function arrayRandom(arr) {
    let idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}


// purely for people who don't know that you can just use Math.your_function_here()
// if you are one of them and are reading this right now - please don't import the functions below, use Math.min(), etc. instead

export const sign = Math.sign;
export const abs = Math.abs;
export const random = Math.random;
export const min = Math.min;
export const max = Math.max;
export const ceil = Math.ceil;
export const floor = Math.floor;
export const round = Math.round;
export const sin = Math.sin;
export const cos = Math.cos;
export const tan = Math.tan;
