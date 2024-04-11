/// <reference types="react" />
import { type lineConfigType, type BarChartPropsType, type barDataItem, type stackDataItem } from './types';
import { type BarAndLineChartsWrapperTypes, type secondaryYAxisType } from '../utils/types';
import { type Animated } from 'react-native';
export interface extendedBarChartPropsType extends BarChartPropsType {
    heightValue?: Animated.Value;
    widthValue?: Animated.Value;
    opacValue?: Animated.Value;
    verticalLinesUptoDataPoint?: boolean;
    secondaryYAxis?: secondaryYAxisType | boolean;
}
export declare const useBarChart: (props: extendedBarChartPropsType) => {
    lineConfig: lineConfigType;
    hidePointer1: boolean;
    pointerItem: barDataItem | stackDataItem | undefined;
    pointerY: number;
    pointerConfig: import("../utils/types").Pointer | undefined;
    pointerColor: import("react-native").ColorValue;
    pointerX: number;
    pointerComponent: Function | null;
    pointerHeight: number;
    pointerRadius: number;
    pointerWidth: number;
    autoAdjustPointerLabelPosition: boolean;
    pointerLabelWidth: number;
    activatePointersOnLongPress: boolean;
    yAxisLabelWidth: number;
    shiftPointerLabelX: number;
    pointerLabelHeight: number;
    pointerStripUptoDataPoint: boolean;
    pointerStripHeight: number;
    shiftPointerLabelY: number;
    showPointerStrip: boolean;
    pointerStripWidth: number;
    containerHeight: number;
    xAxisThickness: number;
    pointerStripColor: import("react-native").ColorValue;
    pointerEvents: import("../utils/types").PointerEvents | undefined;
    setResponderStartTime: import("react").Dispatch<import("react").SetStateAction<number>>;
    setPointerY: import("react").Dispatch<import("react").SetStateAction<number>>;
    setPointerItem: import("react").Dispatch<import("react").SetStateAction<barDataItem | stackDataItem | undefined>>;
    initialSpacing: number;
    spacing: number;
    data: barDataItem[];
    barWidth: number;
    setPointerX: import("react").Dispatch<import("react").SetStateAction<number>>;
    setPointerIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
    maxValue: number;
    maxItem: number;
    responderStartTime: number;
    responderActive: boolean;
    setResponderActive: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    activatePointersDelay: number;
    persistPointer: boolean;
    pointerVanishDelay: number;
    containerHeightIncludingBelowXAxis: number;
    extendedContainerHeight: number;
    totalWidth: number;
    stripBehindBars: boolean;
    noOfSectionsBelowXAxis: number;
    stepHeight: number;
    xAxisLabelsVerticalShift: number;
    labelsExtraHeight: number;
    stripOverPointer: boolean;
    pointerLabelComponent: Function | null;
    opacity: number;
    rotateLabel: boolean;
    showXAxisIndices: boolean;
    xAxisIndicesHeight: number;
    xAxisIndicesWidth: number;
    xAxisIndicesColor: import("react-native").ColorValue;
    horizontal: boolean;
    rtl: boolean;
    intactTopLabel: boolean;
    barBorderColor: import("react-native").ColorValue;
    barInnerComponent: ((item?: barDataItem | stackDataItem | undefined, index?: number | undefined) => import("react").ReactNode) | undefined;
    xAxisTextNumberOfLines: number;
    selectedIndex: number;
    setSelectedIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
    isAnimated: boolean;
    animationDuration: number;
    side: string;
    labelWidth: number;
    isThreeD: boolean;
    animatedHeight: Animated.AnimatedInterpolation<string | number> | undefined;
    appearingOpacity: Animated.AnimatedInterpolation<string | number> | undefined;
    autoShiftLabels: boolean;
    yAxisAtTop: boolean;
    secondaryData: import("..").lineDataItem[] | barDataItem[] | undefined;
    disableScroll: boolean;
    showScrollIndicator: boolean;
    scrollToEnd: boolean;
    scrollAnimation: boolean;
    scrollEventThrottle: number;
    showLine: boolean;
    lineConfig2: lineConfigType;
    lineData: (import("..").lineDataItem | barDataItem | stackDataItem)[];
    lineData2: (import("..").lineDataItem | barDataItem | stackDataItem)[] | undefined;
    animatedWidth: Animated.AnimatedInterpolation<string | number> | undefined;
    lineBehindBars: boolean;
    points: string;
    setPoints: import("react").Dispatch<import("react").SetStateAction<string>>;
    points2: string;
    setPoints2: import("react").Dispatch<import("react").SetStateAction<string>>;
    arrowPoints: string;
    setArrowPoints: import("react").Dispatch<import("react").SetStateAction<string>>;
    horizSections: {
        value: string;
    }[];
    endSpacing: number;
    horizontalRulesStyle: any;
    noOfSections: number;
    showFractionalValues: boolean;
    widthFromProps: number | undefined;
    stepValue: number;
    secondaryMaxValue: number;
    getPointerProps: Function | null;
    pointerIndex: number;
    getPropsCommonForBarAndStack: (item: any, index: number) => {
        key: number;
        item: any;
        index: number;
        containerHeight: number;
        maxValue: number;
        spacing: any;
        propSpacing: number;
        xAxisThickness: number;
        barWidth: number | undefined;
        opacity: number;
        disablePress: any;
        rotateLabel: boolean;
        showXAxisIndices: boolean;
        xAxisIndicesHeight: number;
        xAxisIndicesWidth: number;
        xAxisIndicesColor: import("react-native").ColorValue;
        horizontal: boolean;
        rtl: boolean;
        intactTopLabel: boolean;
        showValuesAsTopLabel: boolean | undefined;
        topLabelContainerStyle: any;
        topLabelTextStyle: any;
        barBorderWidth: number | undefined;
        barBorderColor: import("react-native").ColorValue;
        barBorderRadius: number | undefined;
        barBorderTopLeftRadius: number | undefined;
        barBorderTopRightRadius: number | undefined;
        barBorderBottomLeftRadius: number | undefined;
        barBorderBottomRightRadius: number | undefined;
        barInnerComponent: ((item?: barDataItem | stackDataItem | undefined, index?: number | undefined) => import("react").ReactNode) | undefined;
        color: import("react-native").ColorValue | undefined;
        showGradient: boolean | undefined;
        gradientColor: import("react-native").ColorValue | undefined;
        barBackgroundPattern: (() => import("react").ReactNode) | undefined;
        patternId: string | undefined;
        onPress: Function | undefined;
        onLongPress: Function | undefined;
        onPressOut: Function | undefined;
        focusBarOnPress: boolean | undefined;
        focusedBarConfig: import("./types").FocusedBarConfig | undefined;
        xAxisTextNumberOfLines: number;
        xAxisLabelsHeight: number | undefined;
        xAxisLabelsVerticalShift: number;
        renderTooltip: Function | undefined;
        leftShiftForTooltip: number;
        initialSpacing: number;
        selectedIndex: number;
        setSelectedIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
        activeOpacity: number;
        noOfSectionsBelowXAxis: number;
        leftShiftForLastIndexTooltip: number;
        label: any;
        labelTextStyle: any;
        pointerConfig: import("../utils/types").Pointer | undefined;
        yAxisExtraHeightAtTop: number;
        yAxisOffset: number;
    };
    barAndLineChartsWrapperProps: BarAndLineChartsWrapperTypes;
    yAxisExtraHeightAtTop: number;
};
