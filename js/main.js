let formatter = {
  formats: {
    normal:
      "\"\\!#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~",
    sansBold:
      "\"\\!#$%&'()*+,-./𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵:;<=>?@𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭[]^_`𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇{|}~",
    sansItalic:
      "\"\\!#$%&'()*+,-./0123456789:;<=>?@𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡[]^_`𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻{|}~",
    monospace:
      "\"\\!#$%&'()*+,-./𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿:;<=>?@𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉[]^_`𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣{|}~",
  },
  new: function () {
    this.input = document.querySelector(".input");
  },
  formatSelection: function (font) {
    let value = this.input.value.split("");
    let start = this.input.selectionStart;
    let end = this.input.selectionEnd;
    console.log(value);
    for (let i = start; i < end; ++i) {
      console.log(i);
      let ch = value[i];
      let index = this.formats.normal.indexOf(ch);
      if (index > -1) {
        var uniSelector = new RegExp(`[^]{${index}}(.)`, "u");
        var match = this.formats[font].match(uniSelector);
        if (match.length > 1) {
          value[i] = match[1];
        }
        console.log(ch, index, match[1]);
      }
    }
    this.input.value = value.join("");
  },
};

window.addEventListener(
  "load",
  function () {
    formatter.new();
    let buttons = document.querySelectorAll(".control-btns button");
    buttons.forEach((btn) => {
      btn.addEventListener(
        "click",
        function () {
          formatter.formatSelection(this.className);
        },
        false
      );
    });
  },
  false
);
