var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { getStrokeDashArray } from '../utils';
import { AxesAndRulesDefaults, populationDefaults } from '../utils/constants';
import { Framework } from '../utils/types';
export var usePopulationPyramid = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
    var framework = props.framework, _v = props.height, height = _v === void 0 ? populationDefaults.height : _v, _w = props.width, width = _w === void 0 ? props.screenWidth : _w, _x = props.verticalMarginBetweenBars, verticalMarginBetweenBars = _x === void 0 ? populationDefaults.verticalMarginBetweenBars : _x, _y = props.barsMapToYAxisSections, barsMapToYAxisSections = _y === void 0 ? populationDefaults.barsMapToYAxisSections : _y, data = props.data, _z = props.hideRules, hideRules = _z === void 0 ? AxesAndRulesDefaults.hideRules : _z, _0 = props.hideYAxisText, hideYAxisText = _0 === void 0 ? AxesAndRulesDefaults.hideYAxisText : _0, _1 = props.yAxisThickness, yAxisThickness = _1 === void 0 ? AxesAndRulesDefaults.yAxisThickness : _1, _2 = props.xAxisThickness, xAxisThickness = _2 === void 0 ? AxesAndRulesDefaults.xAxisThickness : _2, _3 = props.xAxisType, xAxisType = _3 === void 0 ? AxesAndRulesDefaults.xAxisType : _3, _4 = props.xAxisNoOfSections, xAxisNoOfSections = _4 === void 0 ? populationDefaults.xAxisNoOfSections : _4, _5 = props.showXAxisIndices, showXAxisIndices = _5 === void 0 ? populationDefaults.showXAxisIndices : _5, _6 = props.xAxisIndicesWidth, xAxisIndicesWidth = _6 === void 0 ? populationDefaults.xAxisIndicesWidth : _6, _7 = props.xAxisIndicesHeight, xAxisIndicesHeight = _7 === void 0 ? populationDefaults.xAxisIndicesHeight : _7, _8 = props.xAxisIndicesShiftY, xAxisIndicesShiftY = _8 === void 0 ? 0 : _8, _9 = props.showXAxisLabelTexts, showXAxisLabelTexts = _9 === void 0 ? populationDefaults.showXAxisLabelTexts : _9, _10 = props.xAxisLabelFontSize, xAxisLabelFontSize = _10 === void 0 ? populationDefaults.defaultFontSize : _10, _11 = props.xAxisLabelFontStyle, xAxisLabelFontStyle = _11 === void 0 ? populationDefaults.defaultFontStyle : _11, _12 = props.xAxisLabelFontWeight, xAxisLabelFontWeight = _12 === void 0 ? populationDefaults.defaultFontWeight : _12, _13 = props.xAxisLabelFontFamily, xAxisLabelFontFamily = _13 === void 0 ? populationDefaults.defaultFontFamily : _13, _14 = props.xAxisLabelShiftX, xAxisLabelShiftX = _14 === void 0 ? 0 : _14, _15 = props.xAxisLabelShiftY, xAxisLabelShiftY = _15 === void 0 ? 0 : _15, _16 = props.xAxisLabelPrefix, xAxisLabelPrefix = _16 === void 0 ? populationDefaults.prefix : _16, _17 = props.xAxisLabelSuffix, xAxisLabelSuffix = _17 === void 0 ? populationDefaults.suffix : _17, formatXAxisLabels = props.formatXAxisLabels, _18 = props.showVerticalLines, showVerticalLines = _18 === void 0 ? populationDefaults.showVerticalLines : _18, _19 = props.verticalLinesThickness, verticalLinesThickness = _19 === void 0 ? populationDefaults.verticalLinesThickness : _19, _20 = props.verticalLinesType, verticalLinesType = _20 === void 0 ? populationDefaults.verticalLinesType : _20, _21 = props.verticalLinesStrokeDashArray, verticalLinesStrokeDashArray = _21 === void 0 ? populationDefaults.verticalLinesStrokeDashArray : _21, _22 = props.showYAxisIndices, showYAxisIndices = _22 === void 0 ? AxesAndRulesDefaults.showYAxisIndices : _22, _23 = props.yAxisIndicesWidth, yAxisIndicesWidth = _23 === void 0 ? AxesAndRulesDefaults.yAxisIndicesWidth : _23, _24 = props.yAxisIndicesHeight, yAxisIndicesHeight = _24 === void 0 ? AxesAndRulesDefaults.yAxisIndicesHeight : _24, _25 = props.yAxisLabelFontSize, yAxisLabelFontSize = _25 === void 0 ? populationDefaults.defaultFontSize : _25, _26 = props.yAxisLabelFontStyle, yAxisLabelFontStyle = _26 === void 0 ? populationDefaults.defaultFontStyle : _26, _27 = props.yAxisLabelFontWeight, yAxisLabelFontWeight = _27 === void 0 ? populationDefaults.defaultFontWeight : _27, _28 = props.yAxisLabelFontFamily, yAxisLabelFontFamily = _28 === void 0 ? populationDefaults.defaultFontFamily : _28, _29 = props.yAxisLabelTextMarginRight, yAxisLabelTextMarginRight = _29 === void 0 ? populationDefaults.yAxisLabelTextMarginRight : _29, _30 = props.yAxisLabelTexts, yAxisLabelTexts = _30 === void 0 ? [] : _30, _31 = props.showValuesAsBarLabels, showValuesAsBarLabels = _31 === void 0 ? populationDefaults.showValuesAsBarLabels : _31, _32 = props.rulesThickness, rulesThickness = _32 === void 0 ? AxesAndRulesDefaults.rulesThickness : _32, _33 = props.rulesType, rulesType = _33 === void 0 ? AxesAndRulesDefaults.rulesType : _33, _34 = props.dashWidth, dashWidth = _34 === void 0 ? AxesAndRulesDefaults.dashWidth : _34, _35 = props.dashGap, dashGap = _35 === void 0 ? AxesAndRulesDefaults.dashGap : _35, _36 = props.leftBarLabelWidth, leftBarLabelWidth = _36 === void 0 ? populationDefaults.leftBarLabelWidth : _36, _37 = props.leftBarLabelFontSize, leftBarLabelFontSize = _37 === void 0 ? (_a = props.barLabelFontSize) !== null && _a !== void 0 ? _a : populationDefaults.defaultFontSize : _37, _38 = props.leftBarLabelFontStyle, leftBarLabelFontStyle = _38 === void 0 ? (_b = props.barLabelFontStyle) !== null && _b !== void 0 ? _b : populationDefaults.defaultFontStyle : _38, _39 = props.leftBarLabelFontWeight, leftBarLabelFontWeight = _39 === void 0 ? (_c = props.barLabelFontWeight) !== null && _c !== void 0 ? _c : populationDefaults.defaultFontWeight : _39, _40 = props.leftBarLabelFontFamily, leftBarLabelFontFamily = _40 === void 0 ? (_d = props.barLabelFontFamily) !== null && _d !== void 0 ? _d : populationDefaults.defaultFontFamily : _40, _41 = props.leftBarLabelPrefix, leftBarLabelPrefix = _41 === void 0 ? populationDefaults.prefix : _41, _42 = props.leftBarLabelSuffix, leftBarLabelSuffix = _42 === void 0 ? populationDefaults.suffix : _42, _43 = props.rightBarLabelWidth, rightBarLabelWidth = _43 === void 0 ? populationDefaults.rightBarLabelWidth : _43, _44 = props.rightBarLabelFontSize, rightBarLabelFontSize = _44 === void 0 ? (_e = props.barLabelFontSize) !== null && _e !== void 0 ? _e : populationDefaults.defaultFontSize : _44, _45 = props.rightBarLabelFontStyle, rightBarLabelFontStyle = _45 === void 0 ? (_f = props.barLabelFontStyle) !== null && _f !== void 0 ? _f : populationDefaults.defaultFontStyle : _45, _46 = props.rightBarLabelFontWeight, rightBarLabelFontWeight = _46 === void 0 ? (_g = props.barLabelFontWeight) !== null && _g !== void 0 ? _g : populationDefaults.defaultFontWeight : _46, _47 = props.rightBarLabelFontFamily, rightBarLabelFontFamily = _47 === void 0 ? (_h = props.barLabelFontFamily) !== null && _h !== void 0 ? _h : populationDefaults.defaultFontFamily : _47, _48 = props.rightBarLabelPrefix, rightBarLabelPrefix = _48 === void 0 ? populationDefaults.prefix : _48, _49 = props.rightBarLabelSuffix, rightBarLabelSuffix = _49 === void 0 ? populationDefaults.suffix : _49, formatBarLabels = props.formatBarLabels, _50 = props.showMidAxis, showMidAxis = _50 === void 0 ? populationDefaults.showMidAxis : _50, _51 = props.midAxisLabelWidth, midAxisLabelWidth = _51 === void 0 ? populationDefaults.midAxisLabelWidth : _51, _52 = props.midAxisLabelFontSize, midAxisLabelFontSize = _52 === void 0 ? populationDefaults.defaultFontSize : _52, _53 = props.midAxisLabelFontStyle, midAxisLabelFontStyle = _53 === void 0 ? populationDefaults.defaultFontStyle : _53, _54 = props.midAxisLabelFontWeight, midAxisLabelFontWeight = _54 === void 0 ? populationDefaults.defaultFontWeight : _54, _55 = props.midAxisLabelFontFamily, midAxisLabelFontFamily = _55 === void 0 ? populationDefaults.defaultFontFamily : _55, _56 = props.leftBarBorderWidth, leftBarBorderWidth = _56 === void 0 ? (_j = props.barBorderWidth) !== null && _j !== void 0 ? _j : populationDefaults.leftBarBorderWidth : _56, _57 = props.rightBarBorderWidth, rightBarBorderWidth = _57 === void 0 ? (_k = props.barBorderWidth) !== null && _k !== void 0 ? _k : populationDefaults.rightBarBorderWidth : _57, _58 = props.leftBarBorderRadius, leftBarBorderRadius = _58 === void 0 ? (_l = props.barBorderRadius) !== null && _l !== void 0 ? _l : populationDefaults.leftBarBorderRadius : _58, _59 = props.rightBarBorderRadius, rightBarBorderRadius = _59 === void 0 ? (_m = props.barBorderRadius) !== null && _m !== void 0 ? _m : populationDefaults.rightBarBorderRadius : _59, _60 = props.allCornersRounded, allCornersRounded = _60 === void 0 ? populationDefaults.allCornersRounded : _60, _61 = props.showSurplus, showSurplus = _61 === void 0 ? populationDefaults.showSurplus : _61, _62 = props.showSurplusLeft, showSurplusLeft = _62 === void 0 ? populationDefaults.showSurplusLeft : _62, _63 = props.showSurplusRight, showSurplusRight = _63 === void 0 ? populationDefaults.showSurplusRight : _63, _64 = props.leftSurplusBorderWidth, leftSurplusBorderWidth = _64 === void 0 ? populationDefaults.leftSurplusBorderWidth : _64, _65 = props.rightSurplusBorderWidth, rightSurplusBorderWidth = _65 === void 0 ? populationDefaults.rightSurplusBorderWidth : _65;
    var _66 = props.yAxisColor, yAxisColor = _66 === void 0 ? AxesAndRulesDefaults.yAxisColor : _66, _67 = props.xAxisColor, xAxisColor = _67 === void 0 ? AxesAndRulesDefaults.xAxisColor : _67, _68 = props.xAxisIndicesColor, xAxisIndicesColor = _68 === void 0 ? populationDefaults.xAxisIndicesColor : _68, _69 = props.xAxisLabelColor, xAxisLabelColor = _69 === void 0 ? populationDefaults.defaultFontColor : _69, _70 = props.verticalLinesColor, verticalLinesColor = _70 === void 0 ? populationDefaults.verticalLinesColor : _70, _71 = props.yAxisIndicesColor, yAxisIndicesColor = _71 === void 0 ? AxesAndRulesDefaults.yAxisIndicesColor : _71, _72 = props.yAxisLabelColor, yAxisLabelColor = _72 === void 0 ? populationDefaults.defaultFontColor : _72, _73 = props.rulesColor, rulesColor = _73 === void 0 ? AxesAndRulesDefaults.rulesColor : _73, _74 = props.leftBarLabelColor, leftBarLabelColor = _74 === void 0 ? (_o = props.barLabelColor) !== null && _o !== void 0 ? _o : populationDefaults.defaultFontColor : _74, _75 = props.rightBarLabelColor, rightBarLabelColor = _75 === void 0 ? (_p = props.barLabelColor) !== null && _p !== void 0 ? _p : populationDefaults.defaultFontColor : _75, _76 = props.midAxisLabelColor, midAxisLabelColor = _76 === void 0 ? populationDefaults.defaultFontColor : _76, _77 = props.leftBarColor, leftBarColor = _77 === void 0 ? populationDefaults.leftBarColor : _77, _78 = props.rightBarColor, rightBarColor = _78 === void 0 ? populationDefaults.rightBarColor : _78, _79 = props.leftBarBorderColor, leftBarBorderColor = _79 === void 0 ? populationDefaults.leftBarBorderColor : _79, _80 = props.rightBarBorderColor, rightBarBorderColor = _80 === void 0 ? populationDefaults.rightBarBorderColor : _80, _81 = props.leftSurplusColor, leftSurplusColor = _81 === void 0 ? populationDefaults.leftSurplusColor : _81, _82 = props.leftSurplusBorderColor, leftSurplusBorderColor = _82 === void 0 ? populationDefaults.leftSurplusBorderColor : _82, _83 = props.rightSurplusColor, rightSurplusColor = _83 === void 0 ? populationDefaults.rightSurplusColor : _83, _84 = props.rightSurplusBorderColor, rightSurplusBorderColor = _84 === void 0 ? populationDefaults.rightSurplusBorderColor : _84;
    if (framework === Framework.reactJS) {
        yAxisColor = yAxisColor.toString();
        xAxisColor = xAxisColor.toString();
        xAxisIndicesColor = xAxisIndicesColor.toString();
        xAxisLabelColor = xAxisLabelColor.toString();
        verticalLinesColor = verticalLinesColor.toString();
        yAxisIndicesColor = yAxisIndicesColor.toString();
        yAxisLabelColor = yAxisLabelColor.toString();
        rulesColor = rulesColor.toString();
        leftBarLabelColor = leftBarLabelColor.toString();
        rightBarLabelColor = rightBarLabelColor.toString();
        midAxisLabelColor = midAxisLabelColor.toString();
        leftBarColor = leftBarColor.toString();
        rightBarColor = rightBarColor.toString();
        leftBarBorderColor = leftBarBorderColor.toString();
        rightBarBorderColor = rightBarBorderColor.toString();
        leftSurplusColor = leftSurplusColor.toString();
        leftSurplusBorderColor = leftSurplusBorderColor.toString();
        rightSurplusColor = rightSurplusColor.toString();
        rightSurplusBorderColor = rightSurplusBorderColor.toString();
    }
    var yAxisLabelWidth = hideYAxisText
        ? yAxisThickness
        : (_q = props.yAxisLabelWidth) !== null && _q !== void 0 ? _q : AxesAndRulesDefaults.yAxisLabelWidth;
    var noOfSections = (_r = props.noOfSections) !== null && _r !== void 0 ? _r : data.length;
    var containerHeight = props.stepHeight
        ? props.stepHeight * noOfSections
        : height;
    var stepHeight = (_s = props.stepHeight) !== null && _s !== void 0 ? _s : containerHeight / noOfSections;
    var xAxisLabelsHeight = 30;
    var containerHeightWithXaxisLabels = containerHeight + xAxisLabelsHeight;
    var mid = (width + yAxisLabelWidth) / 2;
    var leftMax = Math.max.apply(Math, __spreadArray([], __read(data.map(function (item) { return item.left; })), false));
    var rightMax = Math.max.apply(Math, __spreadArray([], __read(data.map(function (item) { return item.right; })), false));
    var max = Math.max(leftMax, rightMax);
    var xAxisRoundToDigits = (_t = props.xAxisRoundToDigits) !== null && _t !== void 0 ? _t : (max < 0.1 ? 3 : max < 1 ? 2 : max < 10 ? 1 : 0);
    var midAxisAndLabelWidth = (showMidAxis ? midAxisLabelWidth : 0) / 2 +
        Math.max(leftBarLabelWidth, rightBarLabelWidth);
    var barWidthFactor = ((width - yAxisLabelWidth) / 2 - midAxisAndLabelWidth) / max;
    var leftXAfterMid = mid - (showMidAxis ? midAxisLabelWidth / 2 : 0);
    var rightXAfterMid = mid + (showMidAxis ? midAxisLabelWidth / 2 : 0);
    var yAxisLineProps = {
        x1: yAxisLabelWidth,
        y1: 0,
        x2: yAxisLabelWidth,
        y2: containerHeight,
        stroke: yAxisColor,
        strokeWidth: yAxisThickness
    };
    yAxisLineProps.strokeDasharray = getStrokeDashArray(props.yAxisStrokeDashArray, framework);
    var midAxisLineCommonProps = {
        y1: 0,
        y2: containerHeight,
        strokeWidth: (_u = props.midAxisThickness) !== null && _u !== void 0 ? _u : yAxisThickness
    };
    midAxisLineCommonProps.strokeDasharray = getStrokeDashArray(props.midAxisStrokeDashArray, framework);
    var xAxisLabelY = containerHeight + xAxisLabelFontSize + 6 + xAxisLabelShiftY;
    var xAxisIndicesCommonProps = {
        y1: containerHeight - xAxisIndicesHeight / 2 + xAxisIndicesShiftY,
        y2: containerHeight + xAxisIndicesHeight / 2 + xAxisIndicesShiftY,
        stroke: xAxisIndicesColor,
        strokeWidth: xAxisIndicesWidth
    };
    var verticalLinesCommonProps = {
        y1: 0,
        y2: containerHeight,
        stroke: verticalLinesColor,
        strokeWidth: verticalLinesThickness
    };
    verticalLinesCommonProps.strokeDasharray = getStrokeDashArray(verticalLinesStrokeDashArray);
    var xAxisLabelsCommonProps = {
        y: xAxisLabelY + xAxisLabelShiftY,
        stroke: xAxisLabelColor,
        fontSize: xAxisLabelFontSize,
        fontStyle: xAxisLabelFontStyle,
        fontWeight: xAxisLabelFontWeight,
        fontFamily: xAxisLabelFontFamily
    };
    var getXLabel = function (index) {
        return ((leftXAfterMid * index) / xAxisNoOfSections / barWidthFactor)
            .toFixed(xAxisRoundToDigits)
            .toString();
    };
    return {
        height: height,
        width: width,
        verticalMarginBetweenBars: verticalMarginBetweenBars,
        barsMapToYAxisSections: barsMapToYAxisSections,
        data: data,
        hideRules: hideRules,
        hideYAxisText: hideYAxisText,
        yAxisColor: yAxisColor,
        yAxisThickness: yAxisThickness,
        xAxisColor: xAxisColor,
        xAxisThickness: xAxisThickness,
        xAxisType: xAxisType,
        xAxisNoOfSections: xAxisNoOfSections,
        showXAxisIndices: showXAxisIndices,
        xAxisIndicesWidth: xAxisIndicesWidth,
        xAxisIndicesHeight: xAxisIndicesHeight,
        xAxisIndicesColor: xAxisIndicesColor,
        xAxisIndicesShiftY: xAxisIndicesShiftY,
        showXAxisLabelTexts: showXAxisLabelTexts,
        xAxisLabelFontSize: xAxisLabelFontSize,
        xAxisLabelFontStyle: xAxisLabelFontStyle,
        xAxisLabelFontWeight: xAxisLabelFontWeight,
        xAxisLabelFontFamily: xAxisLabelFontFamily,
        xAxisLabelColor: xAxisLabelColor,
        xAxisLabelShiftX: xAxisLabelShiftX,
        xAxisLabelShiftY: xAxisLabelShiftY,
        xAxisLabelPrefix: xAxisLabelPrefix,
        xAxisLabelSuffix: xAxisLabelSuffix,
        formatXAxisLabels: formatXAxisLabels,
        showVerticalLines: showVerticalLines,
        verticalLinesColor: verticalLinesColor,
        verticalLinesThickness: verticalLinesThickness,
        verticalLinesType: verticalLinesType,
        verticalLinesStrokeDashArray: verticalLinesStrokeDashArray,
        showYAxisIndices: showYAxisIndices,
        yAxisIndicesWidth: yAxisIndicesWidth,
        yAxisIndicesHeight: yAxisIndicesHeight,
        yAxisIndicesColor: yAxisIndicesColor,
        yAxisLabelFontSize: yAxisLabelFontSize,
        yAxisLabelFontStyle: yAxisLabelFontStyle,
        yAxisLabelFontWeight: yAxisLabelFontWeight,
        yAxisLabelFontFamily: yAxisLabelFontFamily,
        yAxisLabelColor: yAxisLabelColor,
        yAxisLabelTextMarginRight: yAxisLabelTextMarginRight,
        yAxisLabelTexts: yAxisLabelTexts,
        showValuesAsBarLabels: showValuesAsBarLabels,
        rulesThickness: rulesThickness,
        rulesColor: rulesColor,
        rulesType: rulesType,
        dashWidth: dashWidth,
        dashGap: dashGap,
        leftBarLabelWidth: leftBarLabelWidth,
        leftBarLabelFontSize: leftBarLabelFontSize,
        leftBarLabelColor: leftBarLabelColor,
        leftBarLabelFontStyle: leftBarLabelFontStyle,
        leftBarLabelFontWeight: leftBarLabelFontWeight,
        leftBarLabelFontFamily: leftBarLabelFontFamily,
        leftBarLabelPrefix: leftBarLabelPrefix,
        leftBarLabelSuffix: leftBarLabelSuffix,
        rightBarLabelWidth: rightBarLabelWidth,
        rightBarLabelFontSize: rightBarLabelFontSize,
        rightBarLabelColor: rightBarLabelColor,
        rightBarLabelFontStyle: rightBarLabelFontStyle,
        rightBarLabelFontWeight: rightBarLabelFontWeight,
        rightBarLabelFontFamily: rightBarLabelFontFamily,
        rightBarLabelPrefix: rightBarLabelPrefix,
        rightBarLabelSuffix: rightBarLabelSuffix,
        formatBarLabels: formatBarLabels,
        showMidAxis: showMidAxis,
        midAxisLabelWidth: midAxisLabelWidth,
        midAxisLabelFontSize: midAxisLabelFontSize,
        midAxisLabelColor: midAxisLabelColor,
        midAxisLabelFontStyle: midAxisLabelFontStyle,
        midAxisLabelFontWeight: midAxisLabelFontWeight,
        midAxisLabelFontFamily: midAxisLabelFontFamily,
        leftBarColor: leftBarColor,
        rightBarColor: rightBarColor,
        leftBarBorderColor: leftBarBorderColor,
        rightBarBorderColor: rightBarBorderColor,
        leftBarBorderWidth: leftBarBorderWidth,
        rightBarBorderWidth: rightBarBorderWidth,
        leftBarBorderRadius: leftBarBorderRadius,
        rightBarBorderRadius: rightBarBorderRadius,
        allCornersRounded: allCornersRounded,
        showSurplus: showSurplus,
        showSurplusLeft: showSurplusLeft,
        showSurplusRight: showSurplusRight,
        leftSurplusColor: leftSurplusColor,
        leftSurplusBorderColor: leftSurplusBorderColor,
        rightSurplusColor: rightSurplusColor,
        rightSurplusBorderColor: rightSurplusBorderColor,
        leftSurplusBorderWidth: leftSurplusBorderWidth,
        rightSurplusBorderWidth: rightSurplusBorderWidth,
        yAxisLabelWidth: yAxisLabelWidth,
        noOfSections: noOfSections,
        containerHeight: containerHeight,
        stepHeight: stepHeight,
        xAxisLabelsHeight: xAxisLabelsHeight,
        containerHeightWithXaxisLabels: containerHeightWithXaxisLabels,
        mid: mid,
        leftMax: leftMax,
        rightMax: rightMax,
        max: max,
        xAxisRoundToDigits: xAxisRoundToDigits,
        midAxisAndLabelWidth: midAxisAndLabelWidth,
        barWidthFactor: barWidthFactor,
        leftXAfterMid: leftXAfterMid,
        rightXAfterMid: rightXAfterMid,
        yAxisLineProps: yAxisLineProps,
        midAxisLineCommonProps: midAxisLineCommonProps,
        xAxisLabelY: xAxisLabelY,
        xAxisIndicesCommonProps: xAxisIndicesCommonProps,
        verticalLinesCommonProps: verticalLinesCommonProps,
        xAxisLabelsCommonProps: xAxisLabelsCommonProps,
        getXLabel: getXLabel
    };
};
