export default class PathData {
    constructor() {
        this.d = "";
    }

    move(x, y, absolute = false) {
        this.d += (absolute ? "M" : "m") + x + " " + y;
        return this;
    }

    line(x, y, absolute = false) {
        this.d += (absolute ? "L" : "l") + x + " " + y;
        return this;
    }

    lineHorizontal(x, absolute = false) {
        this.d += (absolute ? "H" : "h") + x;
        return this;
    }

    lineVertical(y, absolute = false) {
        this.d += (absolute ? "V" : "v") + y;
        return this;
    }

    curveCubic(x1, y1, x2, y2, x, y, absolute = false) {
        this.d += (absolute ? "C" : "c") + x1 + " " + y1 + " " + x2 + " " + y2 + " " + x + " " + y;
        return this;
    }

    curveSmoothCubic(x2, y2, x, y, absolute = false) {
        this.d += (absolute ? "S" : "s") + x2 + " " + y2 + " " + x + " " + y;
        return this;
    }

    curveQuadratic(x1, y1, x, y, absolute = false) {
        this.d += (absolute ? "Q" : "q") + x1 + " " + y1 + " " + x + " " + y;
        return this;
    }

    curveSmoothQuadratic(x, y, absolute = false) {
        this.d += (absolute ? "T" : "t") + x + " " + y;
        return this;
    }

    arcElliptical(rx, ry, xAxisRotation, largeArc, sweep, x, y) {
        let largeArcNumber = largeArc ? "1" : "0";
        let sweepNumber = sweep ? "1" : "0";
        this.d += (absolute ? "A" : "a") + rx + " " + ry + " " +
                    xAxisRotation + " " + largeArcNumber + " " +
                    sweepNumber + " " + x + " " + y;
        return this;
    }

    closePath() {
        this.d += "Z";
        // No more commands after close path.
        //return this;
    }

    get data() {
        return this.d;
    }
}