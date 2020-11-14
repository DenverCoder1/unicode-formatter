let formatter = {
  // font maps
  fonts: {
    normal:
      "\"\\ !#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~",
    sansBold:
      "\"\\ !#$%&'()*+,-./𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵:;<=>?@𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭[]^_`𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇{|}~",
    sansItalic:
      "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡[]^_`𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻{|}~",
    sansBoldItalic:
      "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕[]^_`𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯{|}~",
    monospace:
      "\"\\　!#$%&'()*+,-./𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿:;<=>?@𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉[]^_`𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣{|}~",
    fullwidth:
      '"＼　！＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；<＝>？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～',
    fraktur:
      "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ[]^_`𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷{|}~",
    boldFraktur:
      "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅[]^_`𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟{|}~",
    serifBold:
      "\"\\ !#$%&'()*+,-./𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗:;<=>?@𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙[]^_`𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳{|}~",
    serifBoldItalic:
      "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁[]^_`𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛{|}~",
    doubleStruck:
      "\"\\ !#$%&'()*+,-./𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡:;<=>?@𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ[]^_`𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫{|}~",
    boldScript:
      "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩[]^_`𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃{|}~",
    circled:
      "\"⦸ !#$%&'()⊛⊕,⊖⨀⊘⓪①②③④⑤⑥⑦⑧⑨:;⧀⊜⧁?@ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ[]^_`ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ{⦶}~",
    circledNegative:
      "\"\\ !#$%&'()*+,-./⓿❶❷❸❹❺❻❼❽❾:;<=>?@🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩[]^_`🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩{|}~",
    squared:
      "\"\\ !#$%&'()*+,-./0123456789:;<=>?@🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉[]^_`🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉{|}~",
    squaredNegative:
      "\"⧅ !#$%&'()⧆⊞,⊟⊡⧄0123456789:;<=>?@🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉[]^_`🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉{|}~",
    parenthesized:
      "\"\\ !#$%&'()*+,-./0⑴⑵⑶⑷⑸⑹⑺⑻⑼:;<=>?@⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵[]^_`⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵{|}~",
    smallCaps:
      "\"\\ !#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴩꞯʀꜱᴛᴜᴠᴡxʏᴢ{|}~",
    subscript:
      "\"\\ !#$%&'()*₊,₋./₀₁₂₃₄₅₆₇₈₉:;<₌>?@ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘ🇶ʀꜱᴛᴜᴠᴡxʏᴢ[]^_`ₐᵦ𝒸𝒹ₑ𝒻𝓰ₕᵢⱼₖₗₘₙₒₚᵩᵣₛₜᵤᵥ𝓌ₓᵧ𝓏{|}~",
    superscript:
      "\"\\ !#$%&'()*⁺,⁻./⁰¹²³⁴⁵⁶⁷⁸⁹:;<⁼>?@ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᵠᴿˢᵀᵁⱽᵂˣʸᶻ[]^_`ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ{|}~",
    inverted:
      "„\\ ¡#$%⅋,)(*+‘-˙/0ƖՇƐᔭϛ9Ɫ86:;<=>¿@∀ꓭↃꓷƎℲ⅁HIſꓘ⅂WNOԀῸꓤS⊥∩ꓥMX⅄Z][^‾`ɐqɔpǝɟƃɥıɾʞןɯuodbɹsʇnʌʍxʎz}|{~",
    mirrored:
      "\"/ !#$%&')(*+,-.\\0߁ςƐ߂टმ٢8୧:;<=>⸮@AꓭↃꓷƎꟻӘHIႱꓘ⅃MИOꟼϘЯꙄTUVWXYZ][^_`ɒdↄbɘʇϱʜiįʞlmᴎoqpᴙꙅɈυvwxγz}|{~",
  },

  // initialize constants
  new: function () {
    this.input = document.querySelector(".input");
  },

  // format highlighted text into selected font.
  formatSelection: function (font) {
    // Array.from() splits the string by symbol and not by code points
    let value = Array.from(this.input.value);
    // selection start is the code point where the selection starts
    let startCodePoint = this.input.selectionStart;
    let endCodePoint = this.input.selectionEnd;
    // check if text is selected
    if (startCodePoint === endCodePoint) {
      return;
    }
    // get symbol indices from code point range
    let start = -1;
    let end = value.length;
    for (let sym = 0, code = 0; sym < end; ++sym) {
      code += value[sym].length;
      // start is not yet set and start code point has been passed
      if (start < 0 && code > startCodePoint) {
        start = sym;
      }
      // end code point has been passed
      else if (code > endCodePoint) {
        end = sym - 1;
      }
    }
    // exchange symbols
    for (let i = start; i <= end; ++i) {
      // the symbol to exchange
      let ch = value[i];
      // get the index of the symbol in the normal font
      let index = this.fonts.normal.indexOf(ch);
      // if not found, check if it is in a different font
      if (index === -1) {
        for (const f in this.fonts) {
          let currFont = Array.from(this.fonts[f]);
          index = currFont.indexOf(ch);
          // break if the symbol is found
          if (index > -1) {
            break;
          }
        }
      }
      // the symbol to exchange was found
      if (index > -1) {
        // set the value at the current index to the symbol in the target font
        let targetFont = Array.from(this.fonts[font]);
        value[i] = targetFont[index];
      }
    }
    // join the array back into a string and set the contents
    this.input.value = value.join("");
  },
};

// when the page loads
window.addEventListener(
  "load",
  function () {
    // initialize formatter input
    formatter.new();
    // add event listeners to buttons
    let buttons = document.querySelectorAll(".control-btns button");
    buttons.forEach((btn) => {
      btn.addEventListener(
        "click",
        function () {
          // format highlighted text into selected font
          formatter.formatSelection(this.className);
        },
        false
      );
    });
    // add event listener to more fonts toggle
    document.querySelector(".more-fonts").addEventListener(
      "click",
      function () {
        // show additional buttons
        if (this.classList.contains("hide")) {
          this.innerText = "⯆ More fonts";
          this.classList.remove("hide");
          document.querySelector(".controls.more").classList.remove("hide");
        }
        // hide additional buttons
        else {
          this.innerText = "⯈ More fonts";
          this.classList.add("hide");
          document.querySelector(".controls.more").classList.add("hide");
        }
      },
      false
    );
  },
  false
);
