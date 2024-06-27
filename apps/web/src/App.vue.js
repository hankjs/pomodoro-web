import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_fnComponent = (await import('vue')).defineComponent({});
let __VLS_functionalComponentProps;
const __VLS_modelEmitsType = {};
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ alt: ("Vue logo"), ...{ class: ("logo") }, src: ("@/assets/logo.svg"), width: ("125"), height: ("125"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("wrapper") }, });
    // @ts-ignore
    [HelloWorld,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(HelloWorld, new HelloWorld({ msg: ("You did it!"), }));
    const __VLS_1 = __VLS_0({ msg: ("You did it!"), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ msg: ("You did it!"), }));
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(HelloWorld, __VLS_1);
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({});
    // @ts-ignore
    const __VLS_5 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ to: ("/"), }));
    const __VLS_7 = __VLS_6({ to: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    ({}({ to: ("/"), }));
    (__VLS_10.slots).default;
    const __VLS_10 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
    // @ts-ignore
    const __VLS_11 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({ to: ("/about"), }));
    const __VLS_13 = __VLS_12({ to: ("/about"), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    ({}({ to: ("/about"), }));
    (__VLS_16.slots).default;
    const __VLS_16 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13);
    // @ts-ignore
    const __VLS_17 = {}
        .RouterView;
    ({}.RouterView);
    __VLS_components.RouterView;
    // @ts-ignore
    [RouterView,];
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({}));
    const __VLS_19 = __VLS_18({}, ...__VLS_functionalComponentArgsRest(__VLS_18));
    ({}({}));
    const __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['logo'];
        __VLS_styleScopedClasses['wrapper'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                RouterLink: RouterLink,
                RouterView: RouterView,
                HelloWorld: HelloWorld,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
