export = Captcha;

/**
 * @typedef {object} Captcha
 * @see {Captcha}
 * @example const CaptchaCard = await new lunaby-canvas.Captcha()
 * @type {Class}
 */
declare class Captcha {
    data: Lunaby-canvasCaptchaData;

    /**
     * .setCaptchaKey
     * @param {string} code someone captcha code
     * @returns {Security}
     */
    setCaptchaKey(code:string):Captcha;


    /**
       * .setBackground
       * @param {string} type "image" or "color"
       * @param {string|Buffer|Image} value "url" or "hexcolor"
       * @returns {Captcha}
       */
    setBackground(type:"image"|"color", value:string):Captcha;


    /**
       * .setBorder
       * @param {string} color "hexcolor"
       * @returns {Security}
       */
    setBorder(color:string):Captcha;

      /**
       * .setOverlayOpacity
       * @param {number} opacity must be between 0 and 1
       * @returns {Security}
       */
    setOverlayOpacity(opacity:number):Captcha;


    build(): Promise<Buffer>;
}

declare namespace Captcha { export { Lunaby-canvasCaptchaData }; }

type Lunaby-canvasCaptchaData = {
    code: null;
    color: "#f0f0f0";
    background: {
      type: "color",
      background: "#23272a"
    };
    overlay_opacity: 0;
    border:null;
};
//# sourceMappingURL=captcha.d.ts.map
