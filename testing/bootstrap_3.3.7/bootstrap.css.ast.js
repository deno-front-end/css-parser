export default {
  "type": "stylesheet",
  "stylesheet": {
    "rules": [
      {
        "type": "rule",
        "selectors": ["html"],
        "declarations": [
          { "type": "property", "name": "font-family" },
          { "type": "property", "name": "-webkit-text-size-adjust" },
          { "type": "property", "name": "-ms-text-size-adjust" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["body"],
        "declarations": [{ "type": "property", "name": "margin" }]
      },
      {
        "type": "rule",
        "selectors": [
          "article",
          "aside",
          "details",
          "figcaption",
          "figure",
          "footer",
          "header",
          "hgroup",
          "main",
          "menu",
          "nav",
          "section",
          "summary"
        ],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "rule",
        "selectors": ["audio", "canvas", "progress", "video"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "vertical-align" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["audio:not([controls])"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "height" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["[hidden]", "template"],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "rule",
        "selectors": ["a"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": ["a:active", "a:hover"],
        "declarations": [{ "type": "property", "name": "outline" }]
      },
      {
        "type": "rule",
        "selectors": ["abbr[title]"],
        "declarations": [{ "type": "property", "name": "border-bottom" }]
      },
      {
        "type": "rule",
        "selectors": ["b", "strong"],
        "declarations": [{ "type": "property", "name": "font-weight" }]
      },
      {
        "type": "rule",
        "selectors": ["dfn"],
        "declarations": [{ "type": "property", "name": "font-style" }]
      },
      {
        "type": "rule",
        "selectors": ["h1"],
        "declarations": [
          { "type": "property", "name": "margin" },
          { "type": "property", "name": "font-size" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["mark"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["small"],
        "declarations": [{ "type": "property", "name": "font-size" }]
      },
      {
        "type": "rule",
        "selectors": ["sub", "sup"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "vertical-align" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["sup"],
        "declarations": [{ "type": "property", "name": "top" }]
      },
      {
        "type": "rule",
        "selectors": ["sub"],
        "declarations": [{ "type": "property", "name": "bottom" }]
      },
      {
        "type": "rule",
        "selectors": ["img"],
        "declarations": [{ "type": "property", "name": "border" }]
      },
      {
        "type": "rule",
        "selectors": ["svg:not(:root)"],
        "declarations": [{ "type": "property", "name": "overflow" }]
      },
      {
        "type": "rule",
        "selectors": ["figure"],
        "declarations": [{ "type": "property", "name": "margin" }]
      },
      {
        "type": "rule",
        "selectors": ["hr"],
        "declarations": [
          { "type": "property", "name": "height" },
          { "type": "property", "name": "-webkit-box-sizing" },
          { "type": "property", "name": "-moz-box-sizing" },
          { "type": "property", "name": "box-sizing" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["pre"],
        "declarations": [{ "type": "property", "name": "overflow" }]
      },
      {
        "type": "rule",
        "selectors": ["code", "kbd", "pre", "samp"],
        "declarations": [
          { "type": "property", "name": "font-family" },
          { "type": "property", "name": "font-size" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["button", "input", "optgroup", "select", "textarea"],
        "declarations": [
          { "type": "property", "name": "margin" },
          { "type": "property", "name": "font" },
          { "type": "property", "name": "color" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["button"],
        "declarations": [{ "type": "property", "name": "overflow" }]
      },
      {
        "type": "rule",
        "selectors": ["button", "select"],
        "declarations": [{ "type": "property", "name": "text-transform" }]
      },
      {
        "type": "rule",
        "selectors": [
          "button",
          "html input[type=\"button\"]",
          "input[type=\"reset\"]",
          "input[type=\"submit\"]"
        ],
        "declarations": [
          { "type": "property", "name": "-webkit-appearance" },
          { "type": "property", "name": "cursor" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["button[disabled]", "html input[disabled]"],
        "declarations": [{ "type": "property", "name": "cursor" }]
      },
      {
        "type": "rule",
        "selectors": ["button::-moz-focus-inner", "input::-moz-focus-inner"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "border" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["input"],
        "declarations": [{ "type": "property", "name": "line-height" }]
      },
      {
        "type": "rule",
        "selectors": ["input[type=\"checkbox\"]", "input[type=\"radio\"]"],
        "declarations": [
          { "type": "property", "name": "-webkit-box-sizing" },
          { "type": "property", "name": "-moz-box-sizing" },
          { "type": "property", "name": "box-sizing" },
          { "type": "property", "name": "padding" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          "input[type=\"number\"]::-webkit-inner-spin-button",
          "input[type=\"number\"]::-webkit-outer-spin-button"
        ],
        "declarations": [{ "type": "property", "name": "height" }]
      },
      {
        "type": "rule",
        "selectors": ["input[type=\"search\"]"],
        "declarations": [
          { "type": "property", "name": "-webkit-box-sizing" },
          { "type": "property", "name": "-moz-box-sizing" },
          { "type": "property", "name": "box-sizing" },
          { "type": "property", "name": "-webkit-appearance" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          "input[type=\"search\"]::-webkit-search-cancel-button",
          "input[type=\"search\"]::-webkit-search-decoration"
        ],
        "declarations": [{ "type": "property", "name": "-webkit-appearance" }]
      },
      {
        "type": "rule",
        "selectors": ["fieldset"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "margin" },
          { "type": "property", "name": "border" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["legend"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "border" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["textarea"],
        "declarations": [{ "type": "property", "name": "overflow" }]
      },
      {
        "type": "rule",
        "selectors": ["optgroup"],
        "declarations": [{ "type": "property", "name": "font-weight" }]
      },
      {
        "type": "rule",
        "selectors": ["table"],
        "declarations": [
          { "type": "property", "name": "border-spacing" },
          { "type": "property", "name": "border-collapse" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["td", "th"],
        "declarations": [{ "type": "property", "name": "padding" }]
      },
      {
        "type": "media",
        "name": "print",
        "rules": [
          {
            "type": "rule",
            "selectors": ["*", "*:before", "*:after"],
            "declarations": [
              { "type": "property", "name": "color" },
              { "type": "property", "name": "text-shadow" },
              { "type": "property", "name": "background" },
              { "type": "property", "name": "-webkit-box-shadow" },
              { "type": "property", "name": "box-shadow" }
            ]
          },
          {
            "type": "rule",
            "selectors": ["a", "a:visited"],
            "declarations": [{ "type": "property", "name": "text-decoration" }]
          },
          {
            "type": "rule",
            "selectors": ["a[href]:after"],
            "declarations": [{ "type": "property", "name": "content" }]
          },
          {
            "type": "rule",
            "selectors": ["abbr[title]:after"],
            "declarations": [{ "type": "property", "name": "content" }]
          },
          {
            "type": "rule",
            "selectors": [
              "a[href^=\"#\"]:after",
              "a[href^=\"javascript:\"]:after"
            ],
            "declarations": [{ "type": "property", "name": "content" }]
          },
          {
            "type": "rule",
            "selectors": ["pre", "blockquote"],
            "declarations": [
              { "type": "property", "name": "border" },
              { "type": "property", "name": "page-break-inside" }
            ]
          },
          {
            "type": "rule",
            "selectors": ["thead"],
            "declarations": [{ "type": "property", "name": "display" }]
          },
          {
            "type": "rule",
            "selectors": ["tr", "img"],
            "declarations": [
              { "type": "property", "name": "page-break-inside" }
            ]
          },
          {
            "type": "rule",
            "selectors": ["img"],
            "declarations": [{ "type": "property", "name": "max-width" }]
          },
          {
            "type": "rule",
            "selectors": ["p", "h2", "h3"],
            "declarations": [
              { "type": "property", "name": "orphans" },
              { "type": "property", "name": "widows" }
            ]
          },
          {
            "type": "rule",
            "selectors": ["h2", "h3"],
            "declarations": [{ "type": "property", "name": "page-break-after" }]
          },
          {
            "type": "rule",
            "selectors": [".navbar"],
            "declarations": [{ "type": "property", "name": "display" }]
          },
          {
            "type": "rule",
            "selectors": [".btn > .caret", ".dropup > .btn > .caret"],
            "declarations": [{ "type": "property", "name": "border-top-color" }]
          },
          {
            "type": "rule",
            "selectors": [".label"],
            "declarations": [{ "type": "property", "name": "border" }]
          },
          {
            "type": "rule",
            "selectors": [".table"],
            "declarations": [{ "type": "property", "name": "border-collapse" }]
          },
          {
            "type": "rule",
            "selectors": [".table td", ".table th"],
            "declarations": [{ "type": "property", "name": "background-color" }]
          },
          {
            "type": "rule",
            "selectors": [".table-bordered th", ".table-bordered td"],
            "declarations": [{ "type": "property", "name": "border" }]
          }
        ]
      },
      {
        "type": "font-face",
        "declarations": [
          { "type": "property", "name": "font-family" },
          { "type": "property", "name": "src" },
          { "type": "property", "name": "src" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "top" },
          { "type": "property", "name": "display" },
          { "type": "property", "name": "font-family" },
          { "type": "property", "name": "font-style" },
          { "type": "property", "name": "font-weight" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "-webkit-font-smoothing" },
          { "type": "property", "name": "-moz-osx-font-smoothing" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-asterisk:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-plus:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-euro:before", ".glyphicon-eur:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-minus:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-cloud:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-envelope:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-pencil:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-glass:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-music:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-search:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-heart:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-star:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-star-empty:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-user:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-film:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-th-large:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-th:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-th-list:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-ok:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-remove:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-zoom-in:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-zoom-out:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-off:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-signal:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-cog:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-trash:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-home:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-file:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-time:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-road:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-download-alt:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-download:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-upload:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-inbox:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-play-circle:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-repeat:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-refresh:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-list-alt:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-lock:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-flag:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-headphones:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-volume-off:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-volume-down:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-volume-up:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-qrcode:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-barcode:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-tag:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-tags:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-book:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-bookmark:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-print:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-camera:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-font:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-bold:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-italic:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-text-height:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-text-width:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-align-left:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-align-center:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-align-right:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-align-justify:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-list:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-indent-left:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-indent-right:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-facetime-video:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-picture:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-map-marker:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-adjust:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-tint:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-edit:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-share:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-check:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-move:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-step-backward:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-fast-backward:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-backward:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-play:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-pause:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-stop:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-forward:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-fast-forward:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-step-forward:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-eject:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-chevron-left:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-chevron-right:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-plus-sign:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-minus-sign:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-remove-sign:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-ok-sign:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-question-sign:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-info-sign:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-screenshot:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-remove-circle:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-ok-circle:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-ban-circle:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-arrow-left:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-arrow-right:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-arrow-up:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-arrow-down:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-share-alt:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-resize-full:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-resize-small:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-exclamation-sign:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-gift:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-leaf:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-fire:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-eye-open:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-eye-close:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-warning-sign:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-plane:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-calendar:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-random:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-comment:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-magnet:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-chevron-up:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-chevron-down:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-retweet:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-shopping-cart:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-folder-close:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-folder-open:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-resize-vertical:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-resize-horizontal:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-hdd:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-bullhorn:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-bell:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-certificate:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-thumbs-up:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-thumbs-down:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-hand-right:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-hand-left:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-hand-up:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-hand-down:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-circle-arrow-right:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-circle-arrow-left:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-circle-arrow-up:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-circle-arrow-down:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-globe:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-wrench:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-tasks:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-filter:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-briefcase:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-fullscreen:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-dashboard:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-paperclip:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-heart-empty:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-link:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-phone:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-pushpin:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-usd:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-gbp:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-sort:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-sort-by-alphabet:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-sort-by-alphabet-alt:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-sort-by-order:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-sort-by-order-alt:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-sort-by-attributes:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-sort-by-attributes-alt:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-unchecked:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-expand:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-collapse-down:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-collapse-up:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-log-in:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-flash:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-log-out:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-new-window:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-record:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-save:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-open:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-saved:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-import:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-export:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-send:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-floppy-disk:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-floppy-saved:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-floppy-remove:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-floppy-save:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-floppy-open:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-credit-card:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-transfer:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-cutlery:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-header:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-compressed:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-earphone:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-phone-alt:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-tower:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-stats:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-sd-video:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-hd-video:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-subtitles:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-sound-stereo:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-sound-dolby:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-sound-5-1:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-sound-6-1:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-sound-7-1:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-copyright-mark:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-registration-mark:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-cloud-download:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-cloud-upload:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-tree-conifer:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-tree-deciduous:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-cd:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-save-file:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-open-file:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-level-up:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-copy:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-paste:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-alert:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-equalizer:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-king:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-queen:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-pawn:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-bishop:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-knight:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-baby-formula:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-tent:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-blackboard:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-bed:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-apple:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-erase:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-hourglass:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-lamp:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-duplicate:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-piggy-bank:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-scissors:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-bitcoin:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-btc:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-xbt:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-yen:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-jpy:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-ruble:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-rub:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-scale:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-ice-lolly:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-ice-lolly-tasted:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-education:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-option-horizontal:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-option-vertical:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-menu-hamburger:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-modal-window:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-oil:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-grain:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-sunglasses:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-text-size:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-text-color:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-text-background:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-object-align-top:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-object-align-bottom:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-object-align-horizontal:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-object-align-left:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-object-align-vertical:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-object-align-right:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-triangle-right:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-triangle-left:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-triangle-bottom:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-triangle-top:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-console:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-superscript:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-subscript:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-menu-left:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-menu-right:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-menu-down:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".glyphicon-menu-up:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": ["*"],
        "declarations": [
          { "type": "property", "name": "-webkit-box-sizing" },
          { "type": "property", "name": "-moz-box-sizing" },
          { "type": "property", "name": "box-sizing" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["*:before", "*:after"],
        "declarations": [
          { "type": "property", "name": "-webkit-box-sizing" },
          { "type": "property", "name": "-moz-box-sizing" },
          { "type": "property", "name": "box-sizing" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["html"],
        "declarations": [
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "-webkit-tap-highlight-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["body"],
        "declarations": [
          { "type": "property", "name": "font-family" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["input", "button", "select", "textarea"],
        "declarations": [
          { "type": "property", "name": "font-family" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["a"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-decoration" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["a:hover", "a:focus"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-decoration" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["a:focus"],
        "declarations": [
          { "type": "property", "name": "outline" },
          { "type": "property", "name": "outline-offset" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["figure"],
        "declarations": [{ "type": "property", "name": "margin" }]
      },
      {
        "type": "rule",
        "selectors": ["img"],
        "declarations": [{ "type": "property", "name": "vertical-align" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".img-responsive",
          ".thumbnail > img",
          ".thumbnail a > img",
          ".carousel-inner > .item > img",
          ".carousel-inner > .item > a > img"
        ],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "max-width" },
          { "type": "property", "name": "height" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".img-rounded"],
        "declarations": [{ "type": "property", "name": "border-radius" }]
      },
      {
        "type": "rule",
        "selectors": [".img-thumbnail"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "max-width" },
          { "type": "property", "name": "height" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border" },
          { "type": "property", "name": "border-radius" },
          { "type": "property", "name": "-webkit-transition" },
          { "type": "property", "name": "-o-transition" },
          { "type": "property", "name": "transition" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".img-circle"],
        "declarations": [{ "type": "property", "name": "border-radius" }]
      },
      {
        "type": "rule",
        "selectors": ["hr"],
        "declarations": [
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "border" },
          { "type": "property", "name": "border-top" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".sr-only"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "width" },
          { "type": "property", "name": "height" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "margin" },
          { "type": "property", "name": "overflow" },
          { "type": "property", "name": "clip" },
          { "type": "property", "name": "border" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".sr-only-focusable:active", ".sr-only-focusable:focus"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "width" },
          { "type": "property", "name": "height" },
          { "type": "property", "name": "margin" },
          { "type": "property", "name": "overflow" },
          { "type": "property", "name": "clip" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["[role=\"button\"]"],
        "declarations": [{ "type": "property", "name": "cursor" }]
      },
      {
        "type": "rule",
        "selectors": [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          ".h1",
          ".h2",
          ".h3",
          ".h4",
          ".h5",
          ".h6"
        ],
        "declarations": [
          { "type": "property", "name": "font-family" },
          { "type": "property", "name": "font-weight" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          "h1 small",
          "h2 small",
          "h3 small",
          "h4 small",
          "h5 small",
          "h6 small",
          ".h1 small",
          ".h2 small",
          ".h3 small",
          ".h4 small",
          ".h5 small",
          ".h6 small",
          "h1 .small",
          "h2 .small",
          "h3 .small",
          "h4 .small",
          "h5 .small",
          "h6 .small",
          ".h1 .small",
          ".h2 .small",
          ".h3 .small",
          ".h4 .small",
          ".h5 .small",
          ".h6 .small"
        ],
        "declarations": [
          { "type": "property", "name": "font-weight" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "color" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["h1", ".h1", "h2", ".h2", "h3", ".h3"],
        "declarations": [
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "margin-bottom" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          "h1 small",
          ".h1 small",
          "h2 small",
          ".h2 small",
          "h3 small",
          ".h3 small",
          "h1 .small",
          ".h1 .small",
          "h2 .small",
          ".h2 .small",
          "h3 .small",
          ".h3 .small"
        ],
        "declarations": [{ "type": "property", "name": "font-size" }]
      },
      {
        "type": "rule",
        "selectors": ["h4", ".h4", "h5", ".h5", "h6", ".h6"],
        "declarations": [
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "margin-bottom" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          "h4 small",
          ".h4 small",
          "h5 small",
          ".h5 small",
          "h6 small",
          ".h6 small",
          "h4 .small",
          ".h4 .small",
          "h5 .small",
          ".h5 .small",
          "h6 .small",
          ".h6 .small"
        ],
        "declarations": [{ "type": "property", "name": "font-size" }]
      },
      {
        "type": "rule",
        "selectors": ["h1", ".h1"],
        "declarations": [{ "type": "property", "name": "font-size" }]
      },
      {
        "type": "rule",
        "selectors": ["h2", ".h2"],
        "declarations": [{ "type": "property", "name": "font-size" }]
      },
      {
        "type": "rule",
        "selectors": ["h3", ".h3"],
        "declarations": [{ "type": "property", "name": "font-size" }]
      },
      {
        "type": "rule",
        "selectors": ["h4", ".h4"],
        "declarations": [{ "type": "property", "name": "font-size" }]
      },
      {
        "type": "rule",
        "selectors": ["h5", ".h5"],
        "declarations": [{ "type": "property", "name": "font-size" }]
      },
      {
        "type": "rule",
        "selectors": ["h6", ".h6"],
        "declarations": [{ "type": "property", "name": "font-size" }]
      },
      {
        "type": "rule",
        "selectors": ["p"],
        "declarations": [{ "type": "property", "name": "margin" }]
      },
      {
        "type": "rule",
        "selectors": [".lead"],
        "declarations": [
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "font-weight" },
          { "type": "property", "name": "line-height" }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".lead"],
            "declarations": [{ "type": "property", "name": "font-size" }]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": ["small", ".small"],
        "declarations": [{ "type": "property", "name": "font-size" }]
      },
      {
        "type": "rule",
        "selectors": ["mark", ".mark"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".text-left"],
        "declarations": [{ "type": "property", "name": "text-align" }]
      },
      {
        "type": "rule",
        "selectors": [".text-right"],
        "declarations": [{ "type": "property", "name": "text-align" }]
      },
      {
        "type": "rule",
        "selectors": [".text-center"],
        "declarations": [{ "type": "property", "name": "text-align" }]
      },
      {
        "type": "rule",
        "selectors": [".text-justify"],
        "declarations": [{ "type": "property", "name": "text-align" }]
      },
      {
        "type": "rule",
        "selectors": [".text-nowrap"],
        "declarations": [{ "type": "property", "name": "white-space" }]
      },
      {
        "type": "rule",
        "selectors": [".text-lowercase"],
        "declarations": [{ "type": "property", "name": "text-transform" }]
      },
      {
        "type": "rule",
        "selectors": [".text-uppercase"],
        "declarations": [{ "type": "property", "name": "text-transform" }]
      },
      {
        "type": "rule",
        "selectors": [".text-capitalize"],
        "declarations": [{ "type": "property", "name": "text-transform" }]
      },
      {
        "type": "rule",
        "selectors": [".text-muted"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".text-primary"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": ["a.text-primary:hover", "a.text-primary:focus"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".text-success"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": ["a.text-success:hover", "a.text-success:focus"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".text-info"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": ["a.text-info:hover", "a.text-info:focus"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".text-warning"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": ["a.text-warning:hover", "a.text-warning:focus"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".text-danger"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": ["a.text-danger:hover", "a.text-danger:focus"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".bg-primary"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["a.bg-primary:hover", "a.bg-primary:focus"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [".bg-success"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": ["a.bg-success:hover", "a.bg-success:focus"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [".bg-info"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": ["a.bg-info:hover", "a.bg-info:focus"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [".bg-warning"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": ["a.bg-warning:hover", "a.bg-warning:focus"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [".bg-danger"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": ["a.bg-danger:hover", "a.bg-danger:focus"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [".page-header"],
        "declarations": [
          { "type": "property", "name": "padding-bottom" },
          { "type": "property", "name": "margin" },
          { "type": "property", "name": "border-bottom" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["ul", "ol"],
        "declarations": [
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "margin-bottom" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["ul ul", "ol ul", "ul ol", "ol ol"],
        "declarations": [{ "type": "property", "name": "margin-bottom" }]
      },
      {
        "type": "rule",
        "selectors": [".list-unstyled"],
        "declarations": [
          { "type": "property", "name": "padding-left" },
          { "type": "property", "name": "list-style" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".list-inline"],
        "declarations": [
          { "type": "property", "name": "padding-left" },
          { "type": "property", "name": "margin-left" },
          { "type": "property", "name": "list-style" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".list-inline > li"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "padding-right" },
          { "type": "property", "name": "padding-left" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["dl"],
        "declarations": [
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "margin-bottom" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["dt", "dd"],
        "declarations": [{ "type": "property", "name": "line-height" }]
      },
      {
        "type": "rule",
        "selectors": ["dt"],
        "declarations": [{ "type": "property", "name": "font-weight" }]
      },
      {
        "type": "rule",
        "selectors": ["dd"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".dl-horizontal dt"],
            "declarations": [
              { "type": "property", "name": "float" },
              { "type": "property", "name": "width" },
              { "type": "property", "name": "overflow" },
              { "type": "property", "name": "clear" },
              { "type": "property", "name": "text-align" },
              { "type": "property", "name": "text-overflow" },
              { "type": "property", "name": "white-space" }
            ]
          },
          {
            "type": "rule",
            "selectors": [".dl-horizontal dd"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": ["abbr[title]", "abbr[data-original-title]"],
        "declarations": [
          { "type": "property", "name": "cursor" },
          { "type": "property", "name": "border-bottom" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".initialism"],
        "declarations": [
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "text-transform" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["blockquote"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "margin" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "border-left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          "blockquote p:last-child",
          "blockquote ul:last-child",
          "blockquote ol:last-child"
        ],
        "declarations": [{ "type": "property", "name": "margin-bottom" }]
      },
      {
        "type": "rule",
        "selectors": [
          "blockquote footer",
          "blockquote small",
          "blockquote .small"
        ],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          "blockquote footer:before",
          "blockquote small:before",
          "blockquote .small:before"
        ],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".blockquote-reverse", "blockquote.pull-right"],
        "declarations": [
          { "type": "property", "name": "padding-right" },
          { "type": "property", "name": "padding-left" },
          { "type": "property", "name": "text-align" },
          { "type": "property", "name": "border-right" },
          { "type": "property", "name": "border-left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".blockquote-reverse footer:before",
          "blockquote.pull-right footer:before",
          ".blockquote-reverse small:before",
          "blockquote.pull-right small:before",
          ".blockquote-reverse .small:before",
          "blockquote.pull-right .small:before"
        ],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".blockquote-reverse footer:after",
          "blockquote.pull-right footer:after",
          ".blockquote-reverse small:after",
          "blockquote.pull-right small:after",
          ".blockquote-reverse .small:after",
          "blockquote.pull-right .small:after"
        ],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": ["address"],
        "declarations": [
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "font-style" },
          { "type": "property", "name": "line-height" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["code", "kbd", "pre", "samp"],
        "declarations": [{ "type": "property", "name": "font-family" }]
      },
      {
        "type": "rule",
        "selectors": ["code"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["kbd"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-radius" },
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["kbd kbd"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "font-weight" },
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["pre"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "margin" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "word-break" },
          { "type": "property", "name": "word-wrap" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["pre code"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "white-space" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".pre-scrollable"],
        "declarations": [
          { "type": "property", "name": "max-height" },
          { "type": "property", "name": "overflow-y" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".container"],
        "declarations": [
          { "type": "property", "name": "padding-right" },
          { "type": "property", "name": "padding-left" },
          { "type": "property", "name": "margin-right" },
          { "type": "property", "name": "margin-left" }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".container"],
            "declarations": [{ "type": "property", "name": "width" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 992px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".container"],
            "declarations": [{ "type": "property", "name": "width" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 1200px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".container"],
            "declarations": [{ "type": "property", "name": "width" }]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".container-fluid"],
        "declarations": [
          { "type": "property", "name": "padding-right" },
          { "type": "property", "name": "padding-left" },
          { "type": "property", "name": "margin-right" },
          { "type": "property", "name": "margin-left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".row"],
        "declarations": [
          { "type": "property", "name": "margin-right" },
          { "type": "property", "name": "margin-left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".col-xs-1",
          ".col-sm-1",
          ".col-md-1",
          ".col-lg-1",
          ".col-xs-2",
          ".col-sm-2",
          ".col-md-2",
          ".col-lg-2",
          ".col-xs-3",
          ".col-sm-3",
          ".col-md-3",
          ".col-lg-3",
          ".col-xs-4",
          ".col-sm-4",
          ".col-md-4",
          ".col-lg-4",
          ".col-xs-5",
          ".col-sm-5",
          ".col-md-5",
          ".col-lg-5",
          ".col-xs-6",
          ".col-sm-6",
          ".col-md-6",
          ".col-lg-6",
          ".col-xs-7",
          ".col-sm-7",
          ".col-md-7",
          ".col-lg-7",
          ".col-xs-8",
          ".col-sm-8",
          ".col-md-8",
          ".col-lg-8",
          ".col-xs-9",
          ".col-sm-9",
          ".col-md-9",
          ".col-lg-9",
          ".col-xs-10",
          ".col-sm-10",
          ".col-md-10",
          ".col-lg-10",
          ".col-xs-11",
          ".col-sm-11",
          ".col-md-11",
          ".col-lg-11",
          ".col-xs-12",
          ".col-sm-12",
          ".col-md-12",
          ".col-lg-12"
        ],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "min-height" },
          { "type": "property", "name": "padding-right" },
          { "type": "property", "name": "padding-left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".col-xs-1",
          ".col-xs-2",
          ".col-xs-3",
          ".col-xs-4",
          ".col-xs-5",
          ".col-xs-6",
          ".col-xs-7",
          ".col-xs-8",
          ".col-xs-9",
          ".col-xs-10",
          ".col-xs-11",
          ".col-xs-12"
        ],
        "declarations": [{ "type": "property", "name": "float" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-12"],
        "declarations": [{ "type": "property", "name": "width" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-11"],
        "declarations": [{ "type": "property", "name": "width" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-10"],
        "declarations": [{ "type": "property", "name": "width" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-9"],
        "declarations": [{ "type": "property", "name": "width" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-8"],
        "declarations": [{ "type": "property", "name": "width" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-7"],
        "declarations": [{ "type": "property", "name": "width" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-6"],
        "declarations": [{ "type": "property", "name": "width" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-5"],
        "declarations": [{ "type": "property", "name": "width" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-4"],
        "declarations": [{ "type": "property", "name": "width" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-3"],
        "declarations": [{ "type": "property", "name": "width" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-2"],
        "declarations": [{ "type": "property", "name": "width" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-1"],
        "declarations": [{ "type": "property", "name": "width" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-pull-12"],
        "declarations": [{ "type": "property", "name": "right" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-pull-11"],
        "declarations": [{ "type": "property", "name": "right" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-pull-10"],
        "declarations": [{ "type": "property", "name": "right" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-pull-9"],
        "declarations": [{ "type": "property", "name": "right" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-pull-8"],
        "declarations": [{ "type": "property", "name": "right" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-pull-7"],
        "declarations": [{ "type": "property", "name": "right" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-pull-6"],
        "declarations": [{ "type": "property", "name": "right" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-pull-5"],
        "declarations": [{ "type": "property", "name": "right" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-pull-4"],
        "declarations": [{ "type": "property", "name": "right" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-pull-3"],
        "declarations": [{ "type": "property", "name": "right" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-pull-2"],
        "declarations": [{ "type": "property", "name": "right" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-pull-1"],
        "declarations": [{ "type": "property", "name": "right" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-pull-0"],
        "declarations": [{ "type": "property", "name": "right" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-push-12"],
        "declarations": [{ "type": "property", "name": "left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-push-11"],
        "declarations": [{ "type": "property", "name": "left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-push-10"],
        "declarations": [{ "type": "property", "name": "left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-push-9"],
        "declarations": [{ "type": "property", "name": "left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-push-8"],
        "declarations": [{ "type": "property", "name": "left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-push-7"],
        "declarations": [{ "type": "property", "name": "left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-push-6"],
        "declarations": [{ "type": "property", "name": "left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-push-5"],
        "declarations": [{ "type": "property", "name": "left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-push-4"],
        "declarations": [{ "type": "property", "name": "left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-push-3"],
        "declarations": [{ "type": "property", "name": "left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-push-2"],
        "declarations": [{ "type": "property", "name": "left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-push-1"],
        "declarations": [{ "type": "property", "name": "left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-push-0"],
        "declarations": [{ "type": "property", "name": "left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-offset-12"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-offset-11"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-offset-10"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-offset-9"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-offset-8"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-offset-7"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-offset-6"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-offset-5"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-offset-4"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-offset-3"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-offset-2"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-offset-1"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [".col-xs-offset-0"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [
              ".col-sm-1",
              ".col-sm-2",
              ".col-sm-3",
              ".col-sm-4",
              ".col-sm-5",
              ".col-sm-6",
              ".col-sm-7",
              ".col-sm-8",
              ".col-sm-9",
              ".col-sm-10",
              ".col-sm-11",
              ".col-sm-12"
            ],
            "declarations": [{ "type": "property", "name": "float" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-12"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-11"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-10"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-9"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-8"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-7"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-6"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-5"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-4"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-3"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-2"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-1"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-pull-12"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-pull-11"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-pull-10"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-pull-9"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-pull-8"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-pull-7"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-pull-6"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-pull-5"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-pull-4"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-pull-3"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-pull-2"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-pull-1"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-pull-0"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-push-12"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-push-11"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-push-10"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-push-9"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-push-8"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-push-7"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-push-6"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-push-5"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-push-4"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-push-3"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-push-2"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-push-1"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-push-0"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-offset-12"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-offset-11"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-offset-10"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-offset-9"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-offset-8"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-offset-7"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-offset-6"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-offset-5"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-offset-4"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-offset-3"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-offset-2"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-offset-1"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-sm-offset-0"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 992px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [
              ".col-md-1",
              ".col-md-2",
              ".col-md-3",
              ".col-md-4",
              ".col-md-5",
              ".col-md-6",
              ".col-md-7",
              ".col-md-8",
              ".col-md-9",
              ".col-md-10",
              ".col-md-11",
              ".col-md-12"
            ],
            "declarations": [{ "type": "property", "name": "float" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-12"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-11"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-10"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-9"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-8"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-7"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-6"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-5"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-4"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-3"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-2"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-1"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-pull-12"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-pull-11"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-pull-10"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-pull-9"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-pull-8"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-pull-7"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-pull-6"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-pull-5"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-pull-4"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-pull-3"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-pull-2"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-pull-1"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-pull-0"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-push-12"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-push-11"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-push-10"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-push-9"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-push-8"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-push-7"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-push-6"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-push-5"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-push-4"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-push-3"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-push-2"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-push-1"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-push-0"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-offset-12"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-offset-11"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-offset-10"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-offset-9"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-offset-8"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-offset-7"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-offset-6"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-offset-5"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-offset-4"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-offset-3"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-offset-2"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-offset-1"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-md-offset-0"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 1200px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [
              ".col-lg-1",
              ".col-lg-2",
              ".col-lg-3",
              ".col-lg-4",
              ".col-lg-5",
              ".col-lg-6",
              ".col-lg-7",
              ".col-lg-8",
              ".col-lg-9",
              ".col-lg-10",
              ".col-lg-11",
              ".col-lg-12"
            ],
            "declarations": [{ "type": "property", "name": "float" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-12"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-11"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-10"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-9"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-8"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-7"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-6"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-5"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-4"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-3"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-2"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-1"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-pull-12"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-pull-11"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-pull-10"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-pull-9"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-pull-8"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-pull-7"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-pull-6"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-pull-5"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-pull-4"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-pull-3"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-pull-2"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-pull-1"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-pull-0"],
            "declarations": [{ "type": "property", "name": "right" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-push-12"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-push-11"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-push-10"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-push-9"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-push-8"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-push-7"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-push-6"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-push-5"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-push-4"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-push-3"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-push-2"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-push-1"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-push-0"],
            "declarations": [{ "type": "property", "name": "left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-offset-12"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-offset-11"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-offset-10"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-offset-9"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-offset-8"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-offset-7"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-offset-6"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-offset-5"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-offset-4"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-offset-3"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-offset-2"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-offset-1"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [".col-lg-offset-0"],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": ["table"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": ["caption"],
        "declarations": [
          { "type": "property", "name": "padding-top" },
          { "type": "property", "name": "padding-bottom" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-align" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["th"],
        "declarations": [{ "type": "property", "name": "text-align" }]
      },
      {
        "type": "rule",
        "selectors": [".table"],
        "declarations": [
          { "type": "property", "name": "width" },
          { "type": "property", "name": "max-width" },
          { "type": "property", "name": "margin-bottom" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".table > thead > tr > th",
          ".table > tbody > tr > th",
          ".table > tfoot > tr > th",
          ".table > thead > tr > td",
          ".table > tbody > tr > td",
          ".table > tfoot > tr > td"
        ],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "vertical-align" },
          { "type": "property", "name": "border-top" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".table > thead > tr > th"],
        "declarations": [
          { "type": "property", "name": "vertical-align" },
          { "type": "property", "name": "border-bottom" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".table > caption + thead > tr:first-child > th",
          ".table > colgroup + thead > tr:first-child > th",
          ".table > thead:first-child > tr:first-child > th",
          ".table > caption + thead > tr:first-child > td",
          ".table > colgroup + thead > tr:first-child > td",
          ".table > thead:first-child > tr:first-child > td"
        ],
        "declarations": [{ "type": "property", "name": "border-top" }]
      },
      {
        "type": "rule",
        "selectors": [".table > tbody + tbody"],
        "declarations": [{ "type": "property", "name": "border-top" }]
      },
      {
        "type": "rule",
        "selectors": [".table .table"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".table-condensed > thead > tr > th",
          ".table-condensed > tbody > tr > th",
          ".table-condensed > tfoot > tr > th",
          ".table-condensed > thead > tr > td",
          ".table-condensed > tbody > tr > td",
          ".table-condensed > tfoot > tr > td"
        ],
        "declarations": [{ "type": "property", "name": "padding" }]
      },
      {
        "type": "rule",
        "selectors": [".table-bordered"],
        "declarations": [{ "type": "property", "name": "border" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".table-bordered > thead > tr > th",
          ".table-bordered > tbody > tr > th",
          ".table-bordered > tfoot > tr > th",
          ".table-bordered > thead > tr > td",
          ".table-bordered > tbody > tr > td",
          ".table-bordered > tfoot > tr > td"
        ],
        "declarations": [{ "type": "property", "name": "border" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".table-bordered > thead > tr > th",
          ".table-bordered > thead > tr > td"
        ],
        "declarations": [{ "type": "property", "name": "border-bottom-width" }]
      },
      {
        "type": "rule",
        "selectors": [".table-striped > tbody > tr:nth-of-type(odd)"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [".table-hover > tbody > tr:hover"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": ["table col[class*=\"col-\"]"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "display" },
          { "type": "property", "name": "float" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["table td[class*=\"col-\"]", "table th[class*=\"col-\"]"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "display" },
          { "type": "property", "name": "float" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".table > thead > tr > td.active",
          ".table > tbody > tr > td.active",
          ".table > tfoot > tr > td.active",
          ".table > thead > tr > th.active",
          ".table > tbody > tr > th.active",
          ".table > tfoot > tr > th.active",
          ".table > thead > tr.active > td",
          ".table > tbody > tr.active > td",
          ".table > tfoot > tr.active > td",
          ".table > thead > tr.active > th",
          ".table > tbody > tr.active > th",
          ".table > tfoot > tr.active > th"
        ],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".table-hover > tbody > tr > td.active:hover",
          ".table-hover > tbody > tr > th.active:hover",
          ".table-hover > tbody > tr.active:hover > td",
          ".table-hover > tbody > tr:hover > .active",
          ".table-hover > tbody > tr.active:hover > th"
        ],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".table > thead > tr > td.success",
          ".table > tbody > tr > td.success",
          ".table > tfoot > tr > td.success",
          ".table > thead > tr > th.success",
          ".table > tbody > tr > th.success",
          ".table > tfoot > tr > th.success",
          ".table > thead > tr.success > td",
          ".table > tbody > tr.success > td",
          ".table > tfoot > tr.success > td",
          ".table > thead > tr.success > th",
          ".table > tbody > tr.success > th",
          ".table > tfoot > tr.success > th"
        ],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".table-hover > tbody > tr > td.success:hover",
          ".table-hover > tbody > tr > th.success:hover",
          ".table-hover > tbody > tr.success:hover > td",
          ".table-hover > tbody > tr:hover > .success",
          ".table-hover > tbody > tr.success:hover > th"
        ],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".table > thead > tr > td.info",
          ".table > tbody > tr > td.info",
          ".table > tfoot > tr > td.info",
          ".table > thead > tr > th.info",
          ".table > tbody > tr > th.info",
          ".table > tfoot > tr > th.info",
          ".table > thead > tr.info > td",
          ".table > tbody > tr.info > td",
          ".table > tfoot > tr.info > td",
          ".table > thead > tr.info > th",
          ".table > tbody > tr.info > th",
          ".table > tfoot > tr.info > th"
        ],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".table-hover > tbody > tr > td.info:hover",
          ".table-hover > tbody > tr > th.info:hover",
          ".table-hover > tbody > tr.info:hover > td",
          ".table-hover > tbody > tr:hover > .info",
          ".table-hover > tbody > tr.info:hover > th"
        ],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".table > thead > tr > td.warning",
          ".table > tbody > tr > td.warning",
          ".table > tfoot > tr > td.warning",
          ".table > thead > tr > th.warning",
          ".table > tbody > tr > th.warning",
          ".table > tfoot > tr > th.warning",
          ".table > thead > tr.warning > td",
          ".table > tbody > tr.warning > td",
          ".table > tfoot > tr.warning > td",
          ".table > thead > tr.warning > th",
          ".table > tbody > tr.warning > th",
          ".table > tfoot > tr.warning > th"
        ],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".table-hover > tbody > tr > td.warning:hover",
          ".table-hover > tbody > tr > th.warning:hover",
          ".table-hover > tbody > tr.warning:hover > td",
          ".table-hover > tbody > tr:hover > .warning",
          ".table-hover > tbody > tr.warning:hover > th"
        ],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".table > thead > tr > td.danger",
          ".table > tbody > tr > td.danger",
          ".table > tfoot > tr > td.danger",
          ".table > thead > tr > th.danger",
          ".table > tbody > tr > th.danger",
          ".table > tfoot > tr > th.danger",
          ".table > thead > tr.danger > td",
          ".table > tbody > tr.danger > td",
          ".table > tfoot > tr.danger > td",
          ".table > thead > tr.danger > th",
          ".table > tbody > tr.danger > th",
          ".table > tfoot > tr.danger > th"
        ],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".table-hover > tbody > tr > td.danger:hover",
          ".table-hover > tbody > tr > th.danger:hover",
          ".table-hover > tbody > tr.danger:hover > td",
          ".table-hover > tbody > tr:hover > .danger",
          ".table-hover > tbody > tr.danger:hover > th"
        ],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [".table-responsive"],
        "declarations": [
          { "type": "property", "name": "min-height" },
          { "type": "property", "name": "overflow-x" }
        ]
      },
      {
        "type": "media",
        "name": "screen and (max-width: 767px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".table-responsive"],
            "declarations": [
              { "type": "property", "name": "width" },
              { "type": "property", "name": "margin-bottom" },
              { "type": "property", "name": "overflow-y" },
              { "type": "property", "name": "-ms-overflow-style" },
              { "type": "property", "name": "border" }
            ]
          },
          {
            "type": "rule",
            "selectors": [".table-responsive > .table"],
            "declarations": [{ "type": "property", "name": "margin-bottom" }]
          },
          {
            "type": "rule",
            "selectors": [
              ".table-responsive > .table > thead > tr > th",
              ".table-responsive > .table > tbody > tr > th",
              ".table-responsive > .table > tfoot > tr > th",
              ".table-responsive > .table > thead > tr > td",
              ".table-responsive > .table > tbody > tr > td",
              ".table-responsive > .table > tfoot > tr > td"
            ],
            "declarations": [{ "type": "property", "name": "white-space" }]
          },
          {
            "type": "rule",
            "selectors": [".table-responsive > .table-bordered"],
            "declarations": [{ "type": "property", "name": "border" }]
          },
          {
            "type": "rule",
            "selectors": [
              ".table-responsive > .table-bordered > thead > tr > th:first-child",
              ".table-responsive > .table-bordered > tbody > tr > th:first-child",
              ".table-responsive > .table-bordered > tfoot > tr > th:first-child",
              ".table-responsive > .table-bordered > thead > tr > td:first-child",
              ".table-responsive > .table-bordered > tbody > tr > td:first-child",
              ".table-responsive > .table-bordered > tfoot > tr > td:first-child"
            ],
            "declarations": [{ "type": "property", "name": "border-left" }]
          },
          {
            "type": "rule",
            "selectors": [
              ".table-responsive > .table-bordered > thead > tr > th:last-child",
              ".table-responsive > .table-bordered > tbody > tr > th:last-child",
              ".table-responsive > .table-bordered > tfoot > tr > th:last-child",
              ".table-responsive > .table-bordered > thead > tr > td:last-child",
              ".table-responsive > .table-bordered > tbody > tr > td:last-child",
              ".table-responsive > .table-bordered > tfoot > tr > td:last-child"
            ],
            "declarations": [{ "type": "property", "name": "border-right" }]
          },
          {
            "type": "rule",
            "selectors": [
              ".table-responsive > .table-bordered > tbody > tr:last-child > th",
              ".table-responsive > .table-bordered > tfoot > tr:last-child > th",
              ".table-responsive > .table-bordered > tbody > tr:last-child > td",
              ".table-responsive > .table-bordered > tfoot > tr:last-child > td"
            ],
            "declarations": [{ "type": "property", "name": "border-bottom" }]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": ["fieldset"],
        "declarations": [
          { "type": "property", "name": "min-width" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "margin" },
          { "type": "property", "name": "border" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["legend"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "width" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "border" },
          { "type": "property", "name": "border-bottom" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["label"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "max-width" },
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "font-weight" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["input[type=\"search\"]"],
        "declarations": [
          { "type": "property", "name": "-webkit-box-sizing" },
          { "type": "property", "name": "-moz-box-sizing" },
          { "type": "property", "name": "box-sizing" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["input[type=\"radio\"]", "input[type=\"checkbox\"]"],
        "declarations": [
          { "type": "property", "name": "margin" },
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "line-height" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["input[type=\"file\"]"],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "rule",
        "selectors": ["input[type=\"range\"]"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "width" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["select[multiple]", "select[size]"],
        "declarations": [{ "type": "property", "name": "height" }]
      },
      {
        "type": "rule",
        "selectors": [
          "input[type=\"file\"]:focus",
          "input[type=\"radio\"]:focus",
          "input[type=\"checkbox\"]:focus"
        ],
        "declarations": [
          { "type": "property", "name": "outline" },
          { "type": "property", "name": "outline-offset" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["output"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "padding-top" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".form-control"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "width" },
          { "type": "property", "name": "height" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "border" },
          { "type": "property", "name": "border-radius" },
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" },
          { "type": "property", "name": "-webkit-transition" },
          { "type": "property", "name": "-o-transition" },
          { "type": "property", "name": "transition" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".form-control:focus"],
        "declarations": [
          { "type": "property", "name": "border-color" },
          { "type": "property", "name": "outline" },
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".form-control::-moz-placeholder"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "opacity" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".form-control:-ms-input-placeholder"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".form-control::-webkit-input-placeholder"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".form-control::-ms-expand"],
        "declarations": [
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".form-control[disabled]",
          ".form-control[readonly]",
          "fieldset[disabled] .form-control"
        ],
        "declarations": [
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "opacity" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".form-control[disabled]",
          "fieldset[disabled] .form-control"
        ],
        "declarations": [{ "type": "property", "name": "cursor" }]
      },
      {
        "type": "rule",
        "selectors": ["textarea.form-control"],
        "declarations": [{ "type": "property", "name": "height" }]
      },
      {
        "type": "rule",
        "selectors": ["input[type=\"search\"]"],
        "declarations": [{ "type": "property", "name": "-webkit-appearance" }]
      },
      {
        "type": "media",
        "name": "screen and (-webkit-min-device-pixel-ratio: 0)",
        "rules": [
          {
            "type": "rule",
            "selectors": [
              "input[type=\"date\"].form-control",
              "input[type=\"time\"].form-control",
              "input[type=\"datetime-local\"].form-control",
              "input[type=\"month\"].form-control"
            ],
            "declarations": [{ "type": "property", "name": "line-height" }]
          },
          {
            "type": "rule",
            "selectors": [
              "input[type=\"date\"].input-sm",
              "input[type=\"time\"].input-sm",
              "input[type=\"datetime-local\"].input-sm",
              "input[type=\"month\"].input-sm",
              ".input-group-sm input[type=\"date\"]",
              ".input-group-sm input[type=\"time\"]",
              ".input-group-sm input[type=\"datetime-local\"]",
              ".input-group-sm input[type=\"month\"]"
            ],
            "declarations": [{ "type": "property", "name": "line-height" }]
          },
          {
            "type": "rule",
            "selectors": [
              "input[type=\"date\"].input-lg",
              "input[type=\"time\"].input-lg",
              "input[type=\"datetime-local\"].input-lg",
              "input[type=\"month\"].input-lg",
              ".input-group-lg input[type=\"date\"]",
              ".input-group-lg input[type=\"time\"]",
              ".input-group-lg input[type=\"datetime-local\"]",
              ".input-group-lg input[type=\"month\"]"
            ],
            "declarations": [{ "type": "property", "name": "line-height" }]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".form-group"],
        "declarations": [{ "type": "property", "name": "margin-bottom" }]
      },
      {
        "type": "rule",
        "selectors": [".radio", ".checkbox"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "display" },
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "margin-bottom" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".radio label", ".checkbox label"],
        "declarations": [
          { "type": "property", "name": "min-height" },
          { "type": "property", "name": "padding-left" },
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "font-weight" },
          { "type": "property", "name": "cursor" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".radio input[type=\"radio\"]",
          ".radio-inline input[type=\"radio\"]",
          ".checkbox input[type=\"checkbox\"]",
          ".checkbox-inline input[type=\"checkbox\"]"
        ],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "margin-left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".radio + .radio", ".checkbox + .checkbox"],
        "declarations": [{ "type": "property", "name": "margin-top" }]
      },
      {
        "type": "rule",
        "selectors": [".radio-inline", ".checkbox-inline"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "display" },
          { "type": "property", "name": "padding-left" },
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "font-weight" },
          { "type": "property", "name": "vertical-align" },
          { "type": "property", "name": "cursor" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".radio-inline + .radio-inline",
          ".checkbox-inline + .checkbox-inline"
        ],
        "declarations": [
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "margin-left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          "input[type=\"radio\"][disabled]",
          "input[type=\"checkbox\"][disabled]",
          "input[type=\"radio\"].disabled",
          "input[type=\"checkbox\"].disabled",
          "fieldset[disabled] input[type=\"radio\"]",
          "fieldset[disabled] input[type=\"checkbox\"]"
        ],
        "declarations": [{ "type": "property", "name": "cursor" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".radio-inline.disabled",
          ".checkbox-inline.disabled",
          "fieldset[disabled] .radio-inline",
          "fieldset[disabled] .checkbox-inline"
        ],
        "declarations": [{ "type": "property", "name": "cursor" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".radio.disabled label",
          ".checkbox.disabled label",
          "fieldset[disabled] .radio label",
          "fieldset[disabled] .checkbox label"
        ],
        "declarations": [{ "type": "property", "name": "cursor" }]
      },
      {
        "type": "rule",
        "selectors": [".form-control-static"],
        "declarations": [
          { "type": "property", "name": "min-height" },
          { "type": "property", "name": "padding-top" },
          { "type": "property", "name": "padding-bottom" },
          { "type": "property", "name": "margin-bottom" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".form-control-static.input-lg",
          ".form-control-static.input-sm"
        ],
        "declarations": [
          { "type": "property", "name": "padding-right" },
          { "type": "property", "name": "padding-left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".input-sm"],
        "declarations": [
          { "type": "property", "name": "height" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["select.input-sm"],
        "declarations": [
          { "type": "property", "name": "height" },
          { "type": "property", "name": "line-height" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["textarea.input-sm", "select[multiple].input-sm"],
        "declarations": [{ "type": "property", "name": "height" }]
      },
      {
        "type": "rule",
        "selectors": [".form-group-sm .form-control"],
        "declarations": [
          { "type": "property", "name": "height" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".form-group-sm select.form-control"],
        "declarations": [
          { "type": "property", "name": "height" },
          { "type": "property", "name": "line-height" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".form-group-sm textarea.form-control",
          ".form-group-sm select[multiple].form-control"
        ],
        "declarations": [{ "type": "property", "name": "height" }]
      },
      {
        "type": "rule",
        "selectors": [".form-group-sm .form-control-static"],
        "declarations": [
          { "type": "property", "name": "height" },
          { "type": "property", "name": "min-height" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".input-lg"],
        "declarations": [
          { "type": "property", "name": "height" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["select.input-lg"],
        "declarations": [
          { "type": "property", "name": "height" },
          { "type": "property", "name": "line-height" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["textarea.input-lg", "select[multiple].input-lg"],
        "declarations": [{ "type": "property", "name": "height" }]
      },
      {
        "type": "rule",
        "selectors": [".form-group-lg .form-control"],
        "declarations": [
          { "type": "property", "name": "height" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".form-group-lg select.form-control"],
        "declarations": [
          { "type": "property", "name": "height" },
          { "type": "property", "name": "line-height" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".form-group-lg textarea.form-control",
          ".form-group-lg select[multiple].form-control"
        ],
        "declarations": [{ "type": "property", "name": "height" }]
      },
      {
        "type": "rule",
        "selectors": [".form-group-lg .form-control-static"],
        "declarations": [
          { "type": "property", "name": "height" },
          { "type": "property", "name": "min-height" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".has-feedback"],
        "declarations": [{ "type": "property", "name": "position" }]
      },
      {
        "type": "rule",
        "selectors": [".has-feedback .form-control"],
        "declarations": [{ "type": "property", "name": "padding-right" }]
      },
      {
        "type": "rule",
        "selectors": [".form-control-feedback"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "top" },
          { "type": "property", "name": "right" },
          { "type": "property", "name": "z-index" },
          { "type": "property", "name": "display" },
          { "type": "property", "name": "width" },
          { "type": "property", "name": "height" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "text-align" },
          { "type": "property", "name": "pointer-events" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".input-lg + .form-control-feedback",
          ".input-group-lg + .form-control-feedback",
          ".form-group-lg .form-control + .form-control-feedback"
        ],
        "declarations": [
          { "type": "property", "name": "width" },
          { "type": "property", "name": "height" },
          { "type": "property", "name": "line-height" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".input-sm + .form-control-feedback",
          ".input-group-sm + .form-control-feedback",
          ".form-group-sm .form-control + .form-control-feedback"
        ],
        "declarations": [
          { "type": "property", "name": "width" },
          { "type": "property", "name": "height" },
          { "type": "property", "name": "line-height" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".has-success .help-block",
          ".has-success .control-label",
          ".has-success .radio",
          ".has-success .checkbox",
          ".has-success .radio-inline",
          ".has-success .checkbox-inline",
          ".has-success.radio label",
          ".has-success.checkbox label",
          ".has-success.radio-inline label",
          ".has-success.checkbox-inline label"
        ],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".has-success .form-control"],
        "declarations": [
          { "type": "property", "name": "border-color" },
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".has-success .form-control:focus"],
        "declarations": [
          { "type": "property", "name": "border-color" },
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".has-success .input-group-addon"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".has-success .form-control-feedback"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".has-warning .help-block",
          ".has-warning .control-label",
          ".has-warning .radio",
          ".has-warning .checkbox",
          ".has-warning .radio-inline",
          ".has-warning .checkbox-inline",
          ".has-warning.radio label",
          ".has-warning.checkbox label",
          ".has-warning.radio-inline label",
          ".has-warning.checkbox-inline label"
        ],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".has-warning .form-control"],
        "declarations": [
          { "type": "property", "name": "border-color" },
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".has-warning .form-control:focus"],
        "declarations": [
          { "type": "property", "name": "border-color" },
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".has-warning .input-group-addon"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".has-warning .form-control-feedback"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".has-error .help-block",
          ".has-error .control-label",
          ".has-error .radio",
          ".has-error .checkbox",
          ".has-error .radio-inline",
          ".has-error .checkbox-inline",
          ".has-error.radio label",
          ".has-error.checkbox label",
          ".has-error.radio-inline label",
          ".has-error.checkbox-inline label"
        ],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".has-error .form-control"],
        "declarations": [
          { "type": "property", "name": "border-color" },
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".has-error .form-control:focus"],
        "declarations": [
          { "type": "property", "name": "border-color" },
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".has-error .input-group-addon"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".has-error .form-control-feedback"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".has-feedback label ~ .form-control-feedback"],
        "declarations": [{ "type": "property", "name": "top" }]
      },
      {
        "type": "rule",
        "selectors": [".has-feedback label.sr-only ~ .form-control-feedback"],
        "declarations": [{ "type": "property", "name": "top" }]
      },
      {
        "type": "rule",
        "selectors": [".help-block"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "color" }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".form-inline .form-group"],
            "declarations": [
              { "type": "property", "name": "display" },
              { "type": "property", "name": "margin-bottom" },
              { "type": "property", "name": "vertical-align" }
            ]
          },
          {
            "type": "rule",
            "selectors": [".form-inline .form-control"],
            "declarations": [
              { "type": "property", "name": "display" },
              { "type": "property", "name": "width" },
              { "type": "property", "name": "vertical-align" }
            ]
          },
          {
            "type": "rule",
            "selectors": [".form-inline .form-control-static"],
            "declarations": [{ "type": "property", "name": "display" }]
          },
          {
            "type": "rule",
            "selectors": [".form-inline .input-group"],
            "declarations": [
              { "type": "property", "name": "display" },
              { "type": "property", "name": "vertical-align" }
            ]
          },
          {
            "type": "rule",
            "selectors": [
              ".form-inline .input-group .input-group-addon",
              ".form-inline .input-group .input-group-btn",
              ".form-inline .input-group .form-control"
            ],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".form-inline .input-group > .form-control"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".form-inline .control-label"],
            "declarations": [
              { "type": "property", "name": "margin-bottom" },
              { "type": "property", "name": "vertical-align" }
            ]
          },
          {
            "type": "rule",
            "selectors": [".form-inline .radio", ".form-inline .checkbox"],
            "declarations": [
              { "type": "property", "name": "display" },
              { "type": "property", "name": "margin-top" },
              { "type": "property", "name": "margin-bottom" },
              { "type": "property", "name": "vertical-align" }
            ]
          },
          {
            "type": "rule",
            "selectors": [
              ".form-inline .radio label",
              ".form-inline .checkbox label"
            ],
            "declarations": [{ "type": "property", "name": "padding-left" }]
          },
          {
            "type": "rule",
            "selectors": [
              ".form-inline .radio input[type=\"radio\"]",
              ".form-inline .checkbox input[type=\"checkbox\"]"
            ],
            "declarations": [
              { "type": "property", "name": "position" },
              { "type": "property", "name": "margin-left" }
            ]
          },
          {
            "type": "rule",
            "selectors": [".form-inline .has-feedback .form-control-feedback"],
            "declarations": [{ "type": "property", "name": "top" }]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".form-horizontal .radio",
          ".form-horizontal .checkbox",
          ".form-horizontal .radio-inline",
          ".form-horizontal .checkbox-inline"
        ],
        "declarations": [
          { "type": "property", "name": "padding-top" },
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "margin-bottom" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".form-horizontal .radio", ".form-horizontal .checkbox"],
        "declarations": [{ "type": "property", "name": "min-height" }]
      },
      {
        "type": "rule",
        "selectors": [".form-horizontal .form-group"],
        "declarations": [
          { "type": "property", "name": "margin-right" },
          { "type": "property", "name": "margin-left" }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".form-horizontal .control-label"],
            "declarations": [
              { "type": "property", "name": "padding-top" },
              { "type": "property", "name": "margin-bottom" },
              { "type": "property", "name": "text-align" }
            ]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".form-horizontal .has-feedback .form-control-feedback"],
        "declarations": [{ "type": "property", "name": "right" }]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".form-horizontal .form-group-lg .control-label"],
            "declarations": [
              { "type": "property", "name": "padding-top" },
              { "type": "property", "name": "font-size" }
            ]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".form-horizontal .form-group-sm .control-label"],
            "declarations": [
              { "type": "property", "name": "padding-top" },
              { "type": "property", "name": "font-size" }
            ]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "font-weight" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "text-align" },
          { "type": "property", "name": "white-space" },
          { "type": "property", "name": "vertical-align" },
          { "type": "property", "name": "-ms-touch-action" },
          { "type": "property", "name": "touch-action" },
          { "type": "property", "name": "cursor" },
          { "type": "property", "name": "-webkit-user-select" },
          { "type": "property", "name": "-moz-user-select" },
          { "type": "property", "name": "-ms-user-select" },
          { "type": "property", "name": "user-select" },
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "border" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn:focus",
          ".btn:active:focus",
          ".btn.active:focus",
          ".btn.focus",
          ".btn:active.focus",
          ".btn.active.focus"
        ],
        "declarations": [
          { "type": "property", "name": "outline" },
          { "type": "property", "name": "outline-offset" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn:hover", ".btn:focus", ".btn.focus"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-decoration" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn:active", ".btn.active"],
        "declarations": [
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "outline" },
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn.disabled",
          ".btn[disabled]",
          "fieldset[disabled] .btn"
        ],
        "declarations": [
          { "type": "property", "name": "cursor" },
          { "type": "property", "name": "filter" },
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" },
          { "type": "property", "name": "opacity" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["a.btn.disabled", "fieldset[disabled] a.btn"],
        "declarations": [{ "type": "property", "name": "pointer-events" }]
      },
      {
        "type": "rule",
        "selectors": [".btn-default"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-default:focus", ".btn-default.focus"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-default:hover"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-default:active",
          ".btn-default.active",
          ".open > .dropdown-toggle.btn-default"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-default:active:hover",
          ".btn-default.active:hover",
          ".open > .dropdown-toggle.btn-default:hover",
          ".btn-default:active:focus",
          ".btn-default.active:focus",
          ".open > .dropdown-toggle.btn-default:focus",
          ".btn-default:active.focus",
          ".btn-default.active.focus",
          ".open > .dropdown-toggle.btn-default.focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-default:active",
          ".btn-default.active",
          ".open > .dropdown-toggle.btn-default"
        ],
        "declarations": [{ "type": "property", "name": "background-image" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-default.disabled:hover",
          ".btn-default[disabled]:hover",
          "fieldset[disabled] .btn-default:hover",
          ".btn-default.disabled:focus",
          ".btn-default[disabled]:focus",
          "fieldset[disabled] .btn-default:focus",
          ".btn-default.disabled.focus",
          ".btn-default[disabled].focus",
          "fieldset[disabled] .btn-default.focus"
        ],
        "declarations": [
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-default .badge"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-primary"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-primary:focus", ".btn-primary.focus"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-primary:hover"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-primary:active",
          ".btn-primary.active",
          ".open > .dropdown-toggle.btn-primary"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-primary:active:hover",
          ".btn-primary.active:hover",
          ".open > .dropdown-toggle.btn-primary:hover",
          ".btn-primary:active:focus",
          ".btn-primary.active:focus",
          ".open > .dropdown-toggle.btn-primary:focus",
          ".btn-primary:active.focus",
          ".btn-primary.active.focus",
          ".open > .dropdown-toggle.btn-primary.focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-primary:active",
          ".btn-primary.active",
          ".open > .dropdown-toggle.btn-primary"
        ],
        "declarations": [{ "type": "property", "name": "background-image" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-primary.disabled:hover",
          ".btn-primary[disabled]:hover",
          "fieldset[disabled] .btn-primary:hover",
          ".btn-primary.disabled:focus",
          ".btn-primary[disabled]:focus",
          "fieldset[disabled] .btn-primary:focus",
          ".btn-primary.disabled.focus",
          ".btn-primary[disabled].focus",
          "fieldset[disabled] .btn-primary.focus"
        ],
        "declarations": [
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-primary .badge"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-success"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-success:focus", ".btn-success.focus"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-success:hover"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-success:active",
          ".btn-success.active",
          ".open > .dropdown-toggle.btn-success"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-success:active:hover",
          ".btn-success.active:hover",
          ".open > .dropdown-toggle.btn-success:hover",
          ".btn-success:active:focus",
          ".btn-success.active:focus",
          ".open > .dropdown-toggle.btn-success:focus",
          ".btn-success:active.focus",
          ".btn-success.active.focus",
          ".open > .dropdown-toggle.btn-success.focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-success:active",
          ".btn-success.active",
          ".open > .dropdown-toggle.btn-success"
        ],
        "declarations": [{ "type": "property", "name": "background-image" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-success.disabled:hover",
          ".btn-success[disabled]:hover",
          "fieldset[disabled] .btn-success:hover",
          ".btn-success.disabled:focus",
          ".btn-success[disabled]:focus",
          "fieldset[disabled] .btn-success:focus",
          ".btn-success.disabled.focus",
          ".btn-success[disabled].focus",
          "fieldset[disabled] .btn-success.focus"
        ],
        "declarations": [
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-success .badge"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-info"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-info:focus", ".btn-info.focus"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-info:hover"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-info:active",
          ".btn-info.active",
          ".open > .dropdown-toggle.btn-info"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-info:active:hover",
          ".btn-info.active:hover",
          ".open > .dropdown-toggle.btn-info:hover",
          ".btn-info:active:focus",
          ".btn-info.active:focus",
          ".open > .dropdown-toggle.btn-info:focus",
          ".btn-info:active.focus",
          ".btn-info.active.focus",
          ".open > .dropdown-toggle.btn-info.focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-info:active",
          ".btn-info.active",
          ".open > .dropdown-toggle.btn-info"
        ],
        "declarations": [{ "type": "property", "name": "background-image" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-info.disabled:hover",
          ".btn-info[disabled]:hover",
          "fieldset[disabled] .btn-info:hover",
          ".btn-info.disabled:focus",
          ".btn-info[disabled]:focus",
          "fieldset[disabled] .btn-info:focus",
          ".btn-info.disabled.focus",
          ".btn-info[disabled].focus",
          "fieldset[disabled] .btn-info.focus"
        ],
        "declarations": [
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-info .badge"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-warning"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-warning:focus", ".btn-warning.focus"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-warning:hover"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-warning:active",
          ".btn-warning.active",
          ".open > .dropdown-toggle.btn-warning"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-warning:active:hover",
          ".btn-warning.active:hover",
          ".open > .dropdown-toggle.btn-warning:hover",
          ".btn-warning:active:focus",
          ".btn-warning.active:focus",
          ".open > .dropdown-toggle.btn-warning:focus",
          ".btn-warning:active.focus",
          ".btn-warning.active.focus",
          ".open > .dropdown-toggle.btn-warning.focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-warning:active",
          ".btn-warning.active",
          ".open > .dropdown-toggle.btn-warning"
        ],
        "declarations": [{ "type": "property", "name": "background-image" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-warning.disabled:hover",
          ".btn-warning[disabled]:hover",
          "fieldset[disabled] .btn-warning:hover",
          ".btn-warning.disabled:focus",
          ".btn-warning[disabled]:focus",
          "fieldset[disabled] .btn-warning:focus",
          ".btn-warning.disabled.focus",
          ".btn-warning[disabled].focus",
          "fieldset[disabled] .btn-warning.focus"
        ],
        "declarations": [
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-warning .badge"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-danger"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-danger:focus", ".btn-danger.focus"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-danger:hover"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-danger:active",
          ".btn-danger.active",
          ".open > .dropdown-toggle.btn-danger"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-danger:active:hover",
          ".btn-danger.active:hover",
          ".open > .dropdown-toggle.btn-danger:hover",
          ".btn-danger:active:focus",
          ".btn-danger.active:focus",
          ".open > .dropdown-toggle.btn-danger:focus",
          ".btn-danger:active.focus",
          ".btn-danger.active.focus",
          ".open > .dropdown-toggle.btn-danger.focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-danger:active",
          ".btn-danger.active",
          ".open > .dropdown-toggle.btn-danger"
        ],
        "declarations": [{ "type": "property", "name": "background-image" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-danger.disabled:hover",
          ".btn-danger[disabled]:hover",
          "fieldset[disabled] .btn-danger:hover",
          ".btn-danger.disabled:focus",
          ".btn-danger[disabled]:focus",
          "fieldset[disabled] .btn-danger:focus",
          ".btn-danger.disabled.focus",
          ".btn-danger[disabled].focus",
          "fieldset[disabled] .btn-danger.focus"
        ],
        "declarations": [
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-danger .badge"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-link"],
        "declarations": [
          { "type": "property", "name": "font-weight" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-link",
          ".btn-link:active",
          ".btn-link.active",
          ".btn-link[disabled]",
          "fieldset[disabled] .btn-link"
        ],
        "declarations": [
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-link",
          ".btn-link:hover",
          ".btn-link:focus",
          ".btn-link:active"
        ],
        "declarations": [{ "type": "property", "name": "border-color" }]
      },
      {
        "type": "rule",
        "selectors": [".btn-link:hover", ".btn-link:focus"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-decoration" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-link[disabled]:hover",
          "fieldset[disabled] .btn-link:hover",
          ".btn-link[disabled]:focus",
          "fieldset[disabled] .btn-link:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-decoration" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-lg", ".btn-group-lg > .btn"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-sm", ".btn-group-sm > .btn"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-xs", ".btn-group-xs > .btn"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-block"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "width" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-block + .btn-block"],
        "declarations": [{ "type": "property", "name": "margin-top" }]
      },
      {
        "type": "rule",
        "selectors": [
          "input[type=\"submit\"].btn-block",
          "input[type=\"reset\"].btn-block",
          "input[type=\"button\"].btn-block"
        ],
        "declarations": [{ "type": "property", "name": "width" }]
      },
      {
        "type": "rule",
        "selectors": [".fade"],
        "declarations": [
          { "type": "property", "name": "opacity" },
          { "type": "property", "name": "-webkit-transition" },
          { "type": "property", "name": "-o-transition" },
          { "type": "property", "name": "transition" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".fade.in"],
        "declarations": [{ "type": "property", "name": "opacity" }]
      },
      {
        "type": "rule",
        "selectors": [".collapse"],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "rule",
        "selectors": [".collapse.in"],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "rule",
        "selectors": ["tr.collapse.in"],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "rule",
        "selectors": ["tbody.collapse.in"],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "rule",
        "selectors": [".collapsing"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "height" },
          { "type": "property", "name": "overflow" },
          { "type": "property", "name": "-webkit-transition-timing-function" },
          { "type": "property", "name": "-o-transition-timing-function" },
          { "type": "property", "name": "transition-timing-function" },
          { "type": "property", "name": "-webkit-transition-duration" },
          { "type": "property", "name": "-o-transition-duration" },
          { "type": "property", "name": "transition-duration" },
          { "type": "property", "name": "-webkit-transition-property" },
          { "type": "property", "name": "-o-transition-property" },
          { "type": "property", "name": "transition-property" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".caret"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "width" },
          { "type": "property", "name": "height" },
          { "type": "property", "name": "margin-left" },
          { "type": "property", "name": "vertical-align" },
          { "type": "property", "name": "border-top" },
          { "type": "property", "name": "border-top" },
          { "type": "property", "name": "border-right" },
          { "type": "property", "name": "border-left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".dropup", ".dropdown"],
        "declarations": [{ "type": "property", "name": "position" }]
      },
      {
        "type": "rule",
        "selectors": [".dropdown-toggle:focus"],
        "declarations": [{ "type": "property", "name": "outline" }]
      },
      {
        "type": "rule",
        "selectors": [".dropdown-menu"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "top" },
          { "type": "property", "name": "left" },
          { "type": "property", "name": "z-index" },
          { "type": "property", "name": "display" },
          { "type": "property", "name": "float" },
          { "type": "property", "name": "min-width" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "margin" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "text-align" },
          { "type": "property", "name": "list-style" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "-webkit-background-clip" },
          { "type": "property", "name": "background-clip" },
          { "type": "property", "name": "border" },
          { "type": "property", "name": "border" },
          { "type": "property", "name": "border-radius" },
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".dropdown-menu.pull-right"],
        "declarations": [
          { "type": "property", "name": "right" },
          { "type": "property", "name": "left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".dropdown-menu .divider"],
        "declarations": [
          { "type": "property", "name": "height" },
          { "type": "property", "name": "margin" },
          { "type": "property", "name": "overflow" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".dropdown-menu > li > a"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "clear" },
          { "type": "property", "name": "font-weight" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "white-space" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".dropdown-menu > li > a:hover",
          ".dropdown-menu > li > a:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-decoration" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".dropdown-menu > .active > a",
          ".dropdown-menu > .active > a:hover",
          ".dropdown-menu > .active > a:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-decoration" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "outline" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".dropdown-menu > .disabled > a",
          ".dropdown-menu > .disabled > a:hover",
          ".dropdown-menu > .disabled > a:focus"
        ],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".dropdown-menu > .disabled > a:hover",
          ".dropdown-menu > .disabled > a:focus"
        ],
        "declarations": [
          { "type": "property", "name": "text-decoration" },
          { "type": "property", "name": "cursor" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "filter" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".open > .dropdown-menu"],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "rule",
        "selectors": [".open > a"],
        "declarations": [{ "type": "property", "name": "outline" }]
      },
      {
        "type": "rule",
        "selectors": [".dropdown-menu-right"],
        "declarations": [
          { "type": "property", "name": "right" },
          { "type": "property", "name": "left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".dropdown-menu-left"],
        "declarations": [
          { "type": "property", "name": "right" },
          { "type": "property", "name": "left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".dropdown-header"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "white-space" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".dropdown-backdrop"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "top" },
          { "type": "property", "name": "right" },
          { "type": "property", "name": "bottom" },
          { "type": "property", "name": "left" },
          { "type": "property", "name": "z-index" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".pull-right > .dropdown-menu"],
        "declarations": [
          { "type": "property", "name": "right" },
          { "type": "property", "name": "left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".dropup .caret",
          ".navbar-fixed-bottom .dropdown .caret"
        ],
        "declarations": [
          { "type": "property", "name": "content" },
          { "type": "property", "name": "border-top" },
          { "type": "property", "name": "border-bottom" },
          { "type": "property", "name": "border-bottom" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".dropup .dropdown-menu",
          ".navbar-fixed-bottom .dropdown .dropdown-menu"
        ],
        "declarations": [
          { "type": "property", "name": "top" },
          { "type": "property", "name": "bottom" },
          { "type": "property", "name": "margin-bottom" }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".navbar-right .dropdown-menu"],
            "declarations": [
              { "type": "property", "name": "right" },
              { "type": "property", "name": "left" }
            ]
          },
          {
            "type": "rule",
            "selectors": [".navbar-right .dropdown-menu-left"],
            "declarations": [
              { "type": "property", "name": "right" },
              { "type": "property", "name": "left" }
            ]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-group", ".btn-group-vertical"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "display" },
          { "type": "property", "name": "vertical-align" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-group > .btn", ".btn-group-vertical > .btn"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "float" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-group > .btn:hover",
          ".btn-group-vertical > .btn:hover",
          ".btn-group > .btn:focus",
          ".btn-group-vertical > .btn:focus",
          ".btn-group > .btn:active",
          ".btn-group-vertical > .btn:active",
          ".btn-group > .btn.active",
          ".btn-group-vertical > .btn.active"
        ],
        "declarations": [{ "type": "property", "name": "z-index" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-group .btn + .btn",
          ".btn-group .btn + .btn-group",
          ".btn-group .btn-group + .btn",
          ".btn-group .btn-group + .btn-group"
        ],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [".btn-toolbar"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-toolbar .btn",
          ".btn-toolbar .btn-group",
          ".btn-toolbar .input-group"
        ],
        "declarations": [{ "type": "property", "name": "float" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-toolbar > .btn",
          ".btn-toolbar > .btn-group",
          ".btn-toolbar > .input-group"
        ],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle)"
        ],
        "declarations": [{ "type": "property", "name": "border-radius" }]
      },
      {
        "type": "rule",
        "selectors": [".btn-group > .btn:first-child"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle)"
        ],
        "declarations": [
          { "type": "property", "name": "border-top-right-radius" },
          { "type": "property", "name": "border-bottom-right-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-group > .btn:last-child:not(:first-child)",
          ".btn-group > .dropdown-toggle:not(:first-child)"
        ],
        "declarations": [
          { "type": "property", "name": "border-top-left-radius" },
          { "type": "property", "name": "border-bottom-left-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-group > .btn-group"],
        "declarations": [{ "type": "property", "name": "float" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-group > .btn-group:not(:first-child):not(:last-child) > .btn"
        ],
        "declarations": [{ "type": "property", "name": "border-radius" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child",
          ".btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle"
        ],
        "declarations": [
          { "type": "property", "name": "border-top-right-radius" },
          { "type": "property", "name": "border-bottom-right-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child"
        ],
        "declarations": [
          { "type": "property", "name": "border-top-left-radius" },
          { "type": "property", "name": "border-bottom-left-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-group .dropdown-toggle:active",
          ".btn-group.open .dropdown-toggle"
        ],
        "declarations": [{ "type": "property", "name": "outline" }]
      },
      {
        "type": "rule",
        "selectors": [".btn-group > .btn + .dropdown-toggle"],
        "declarations": [
          { "type": "property", "name": "padding-right" },
          { "type": "property", "name": "padding-left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-group > .btn-lg + .dropdown-toggle"],
        "declarations": [
          { "type": "property", "name": "padding-right" },
          { "type": "property", "name": "padding-left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-group.open .dropdown-toggle"],
        "declarations": [
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-group.open .dropdown-toggle.btn-link"],
        "declarations": [
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn .caret"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [".btn-lg .caret"],
        "declarations": [
          { "type": "property", "name": "border-width" },
          { "type": "property", "name": "border-bottom-width" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".dropup .btn-lg .caret"],
        "declarations": [{ "type": "property", "name": "border-width" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-group-vertical > .btn",
          ".btn-group-vertical > .btn-group",
          ".btn-group-vertical > .btn-group > .btn"
        ],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "float" },
          { "type": "property", "name": "width" },
          { "type": "property", "name": "max-width" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-group-vertical > .btn-group > .btn"],
        "declarations": [{ "type": "property", "name": "float" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-group-vertical > .btn + .btn",
          ".btn-group-vertical > .btn + .btn-group",
          ".btn-group-vertical > .btn-group + .btn",
          ".btn-group-vertical > .btn-group + .btn-group"
        ],
        "declarations": [
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "margin-left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-group-vertical > .btn:not(:first-child):not(:last-child)"
        ],
        "declarations": [{ "type": "property", "name": "border-radius" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-group-vertical > .btn:first-child:not(:last-child)"
        ],
        "declarations": [
          { "type": "property", "name": "border-top-left-radius" },
          { "type": "property", "name": "border-top-right-radius" },
          { "type": "property", "name": "border-bottom-right-radius" },
          { "type": "property", "name": "border-bottom-left-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-group-vertical > .btn:last-child:not(:first-child)"
        ],
        "declarations": [
          { "type": "property", "name": "border-top-left-radius" },
          { "type": "property", "name": "border-top-right-radius" },
          { "type": "property", "name": "border-bottom-right-radius" },
          { "type": "property", "name": "border-bottom-left-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn"
        ],
        "declarations": [{ "type": "property", "name": "border-radius" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child",
          ".btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle"
        ],
        "declarations": [
          { "type": "property", "name": "border-bottom-right-radius" },
          { "type": "property", "name": "border-bottom-left-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child"
        ],
        "declarations": [
          { "type": "property", "name": "border-top-left-radius" },
          { "type": "property", "name": "border-top-right-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-group-justified"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "width" },
          { "type": "property", "name": "table-layout" },
          { "type": "property", "name": "border-collapse" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".btn-group-justified > .btn",
          ".btn-group-justified > .btn-group"
        ],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "float" },
          { "type": "property", "name": "width" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-group-justified > .btn-group .btn"],
        "declarations": [{ "type": "property", "name": "width" }]
      },
      {
        "type": "rule",
        "selectors": [".btn-group-justified > .btn-group .dropdown-menu"],
        "declarations": [{ "type": "property", "name": "left" }]
      },
      {
        "type": "rule",
        "selectors": [
          "[data-toggle=\"buttons\"] > .btn input[type=\"radio\"]",
          "[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"]",
          "[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"]",
          "[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"]"
        ],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "clip" },
          { "type": "property", "name": "pointer-events" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".input-group"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "display" },
          { "type": "property", "name": "border-collapse" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".input-group[class*=\"col-\"]"],
        "declarations": [
          { "type": "property", "name": "float" },
          { "type": "property", "name": "padding-right" },
          { "type": "property", "name": "padding-left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".input-group .form-control"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "z-index" },
          { "type": "property", "name": "float" },
          { "type": "property", "name": "width" },
          { "type": "property", "name": "margin-bottom" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".input-group .form-control:focus"],
        "declarations": [{ "type": "property", "name": "z-index" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".input-group-lg > .form-control",
          ".input-group-lg > .input-group-addon",
          ".input-group-lg > .input-group-btn > .btn"
        ],
        "declarations": [
          { "type": "property", "name": "height" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          "select.input-group-lg > .form-control",
          "select.input-group-lg > .input-group-addon",
          "select.input-group-lg > .input-group-btn > .btn"
        ],
        "declarations": [
          { "type": "property", "name": "height" },
          { "type": "property", "name": "line-height" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          "textarea.input-group-lg > .form-control",
          "textarea.input-group-lg > .input-group-addon",
          "textarea.input-group-lg > .input-group-btn > .btn",
          "select[multiple].input-group-lg > .form-control",
          "select[multiple].input-group-lg > .input-group-addon",
          "select[multiple].input-group-lg > .input-group-btn > .btn"
        ],
        "declarations": [{ "type": "property", "name": "height" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".input-group-sm > .form-control",
          ".input-group-sm > .input-group-addon",
          ".input-group-sm > .input-group-btn > .btn"
        ],
        "declarations": [
          { "type": "property", "name": "height" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          "select.input-group-sm > .form-control",
          "select.input-group-sm > .input-group-addon",
          "select.input-group-sm > .input-group-btn > .btn"
        ],
        "declarations": [
          { "type": "property", "name": "height" },
          { "type": "property", "name": "line-height" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          "textarea.input-group-sm > .form-control",
          "textarea.input-group-sm > .input-group-addon",
          "textarea.input-group-sm > .input-group-btn > .btn",
          "select[multiple].input-group-sm > .form-control",
          "select[multiple].input-group-sm > .input-group-addon",
          "select[multiple].input-group-sm > .input-group-btn > .btn"
        ],
        "declarations": [{ "type": "property", "name": "height" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".input-group-addon",
          ".input-group-btn",
          ".input-group .form-control"
        ],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".input-group-addon:not(:first-child):not(:last-child)",
          ".input-group-btn:not(:first-child):not(:last-child)",
          ".input-group .form-control:not(:first-child):not(:last-child)"
        ],
        "declarations": [{ "type": "property", "name": "border-radius" }]
      },
      {
        "type": "rule",
        "selectors": [".input-group-addon", ".input-group-btn"],
        "declarations": [
          { "type": "property", "name": "width" },
          { "type": "property", "name": "white-space" },
          { "type": "property", "name": "vertical-align" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".input-group-addon"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "font-weight" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-align" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".input-group-addon.input-sm"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".input-group-addon.input-lg"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".input-group-addon input[type=\"radio\"]",
          ".input-group-addon input[type=\"checkbox\"]"
        ],
        "declarations": [{ "type": "property", "name": "margin-top" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".input-group .form-control:first-child",
          ".input-group-addon:first-child",
          ".input-group-btn:first-child > .btn",
          ".input-group-btn:first-child > .btn-group > .btn",
          ".input-group-btn:first-child > .dropdown-toggle",
          ".input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle)",
          ".input-group-btn:last-child > .btn-group:not(:last-child) > .btn"
        ],
        "declarations": [
          { "type": "property", "name": "border-top-right-radius" },
          { "type": "property", "name": "border-bottom-right-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".input-group-addon:first-child"],
        "declarations": [{ "type": "property", "name": "border-right" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".input-group .form-control:last-child",
          ".input-group-addon:last-child",
          ".input-group-btn:last-child > .btn",
          ".input-group-btn:last-child > .btn-group > .btn",
          ".input-group-btn:last-child > .dropdown-toggle",
          ".input-group-btn:first-child > .btn:not(:first-child)",
          ".input-group-btn:first-child > .btn-group:not(:first-child) > .btn"
        ],
        "declarations": [
          { "type": "property", "name": "border-top-left-radius" },
          { "type": "property", "name": "border-bottom-left-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".input-group-addon:last-child"],
        "declarations": [{ "type": "property", "name": "border-left" }]
      },
      {
        "type": "rule",
        "selectors": [".input-group-btn"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "white-space" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".input-group-btn > .btn"],
        "declarations": [{ "type": "property", "name": "position" }]
      },
      {
        "type": "rule",
        "selectors": [".input-group-btn > .btn + .btn"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".input-group-btn > .btn:hover",
          ".input-group-btn > .btn:focus",
          ".input-group-btn > .btn:active"
        ],
        "declarations": [{ "type": "property", "name": "z-index" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".input-group-btn:first-child > .btn",
          ".input-group-btn:first-child > .btn-group"
        ],
        "declarations": [{ "type": "property", "name": "margin-right" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".input-group-btn:last-child > .btn",
          ".input-group-btn:last-child > .btn-group"
        ],
        "declarations": [
          { "type": "property", "name": "z-index" },
          { "type": "property", "name": "margin-left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".nav"],
        "declarations": [
          { "type": "property", "name": "padding-left" },
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "list-style" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".nav > li"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "display" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".nav > li > a"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "display" },
          { "type": "property", "name": "padding" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".nav > li > a:hover", ".nav > li > a:focus"],
        "declarations": [
          { "type": "property", "name": "text-decoration" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".nav > li.disabled > a"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".nav > li.disabled > a:hover",
          ".nav > li.disabled > a:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-decoration" },
          { "type": "property", "name": "cursor" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".nav .open > a",
          ".nav .open > a:hover",
          ".nav .open > a:focus"
        ],
        "declarations": [
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".nav .nav-divider"],
        "declarations": [
          { "type": "property", "name": "height" },
          { "type": "property", "name": "margin" },
          { "type": "property", "name": "overflow" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".nav > li > a > img"],
        "declarations": [{ "type": "property", "name": "max-width" }]
      },
      {
        "type": "rule",
        "selectors": [".nav-tabs"],
        "declarations": [{ "type": "property", "name": "border-bottom" }]
      },
      {
        "type": "rule",
        "selectors": [".nav-tabs > li"],
        "declarations": [
          { "type": "property", "name": "float" },
          { "type": "property", "name": "margin-bottom" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".nav-tabs > li > a"],
        "declarations": [
          { "type": "property", "name": "margin-right" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "border" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".nav-tabs > li > a:hover"],
        "declarations": [{ "type": "property", "name": "border-color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".nav-tabs > li.active > a",
          ".nav-tabs > li.active > a:hover",
          ".nav-tabs > li.active > a:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "cursor" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border" },
          { "type": "property", "name": "border-bottom-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".nav-tabs.nav-justified"],
        "declarations": [
          { "type": "property", "name": "width" },
          { "type": "property", "name": "border-bottom" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".nav-tabs.nav-justified > li"],
        "declarations": [{ "type": "property", "name": "float" }]
      },
      {
        "type": "rule",
        "selectors": [".nav-tabs.nav-justified > li > a"],
        "declarations": [
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "text-align" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".nav-tabs.nav-justified > .dropdown .dropdown-menu"],
        "declarations": [
          { "type": "property", "name": "top" },
          { "type": "property", "name": "left" }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".nav-tabs.nav-justified > li"],
            "declarations": [
              { "type": "property", "name": "display" },
              { "type": "property", "name": "width" }
            ]
          },
          {
            "type": "rule",
            "selectors": [".nav-tabs.nav-justified > li > a"],
            "declarations": [{ "type": "property", "name": "margin-bottom" }]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".nav-tabs.nav-justified > li > a"],
        "declarations": [
          { "type": "property", "name": "margin-right" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".nav-tabs.nav-justified > .active > a",
          ".nav-tabs.nav-justified > .active > a:hover",
          ".nav-tabs.nav-justified > .active > a:focus"
        ],
        "declarations": [{ "type": "property", "name": "border" }]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".nav-tabs.nav-justified > li > a"],
            "declarations": [
              { "type": "property", "name": "border-bottom" },
              { "type": "property", "name": "border-radius" }
            ]
          },
          {
            "type": "rule",
            "selectors": [
              ".nav-tabs.nav-justified > .active > a",
              ".nav-tabs.nav-justified > .active > a:hover",
              ".nav-tabs.nav-justified > .active > a:focus"
            ],
            "declarations": [
              { "type": "property", "name": "border-bottom-color" }
            ]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".nav-pills > li"],
        "declarations": [{ "type": "property", "name": "float" }]
      },
      {
        "type": "rule",
        "selectors": [".nav-pills > li > a"],
        "declarations": [{ "type": "property", "name": "border-radius" }]
      },
      {
        "type": "rule",
        "selectors": [".nav-pills > li + li"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".nav-pills > li.active > a",
          ".nav-pills > li.active > a:hover",
          ".nav-pills > li.active > a:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".nav-stacked > li"],
        "declarations": [{ "type": "property", "name": "float" }]
      },
      {
        "type": "rule",
        "selectors": [".nav-stacked > li + li"],
        "declarations": [
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "margin-left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".nav-justified"],
        "declarations": [{ "type": "property", "name": "width" }]
      },
      {
        "type": "rule",
        "selectors": [".nav-justified > li"],
        "declarations": [{ "type": "property", "name": "float" }]
      },
      {
        "type": "rule",
        "selectors": [".nav-justified > li > a"],
        "declarations": [
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "text-align" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".nav-justified > .dropdown .dropdown-menu"],
        "declarations": [
          { "type": "property", "name": "top" },
          { "type": "property", "name": "left" }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".nav-justified > li"],
            "declarations": [
              { "type": "property", "name": "display" },
              { "type": "property", "name": "width" }
            ]
          },
          {
            "type": "rule",
            "selectors": [".nav-justified > li > a"],
            "declarations": [{ "type": "property", "name": "margin-bottom" }]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".nav-tabs-justified"],
        "declarations": [{ "type": "property", "name": "border-bottom" }]
      },
      {
        "type": "rule",
        "selectors": [".nav-tabs-justified > li > a"],
        "declarations": [
          { "type": "property", "name": "margin-right" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".nav-tabs-justified > .active > a",
          ".nav-tabs-justified > .active > a:hover",
          ".nav-tabs-justified > .active > a:focus"
        ],
        "declarations": [{ "type": "property", "name": "border" }]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".nav-tabs-justified > li > a"],
            "declarations": [
              { "type": "property", "name": "border-bottom" },
              { "type": "property", "name": "border-radius" }
            ]
          },
          {
            "type": "rule",
            "selectors": [
              ".nav-tabs-justified > .active > a",
              ".nav-tabs-justified > .active > a:hover",
              ".nav-tabs-justified > .active > a:focus"
            ],
            "declarations": [
              { "type": "property", "name": "border-bottom-color" }
            ]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".tab-content > .tab-pane"],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "rule",
        "selectors": [".tab-content > .active"],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "rule",
        "selectors": [".nav-tabs .dropdown-menu"],
        "declarations": [
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "border-top-left-radius" },
          { "type": "property", "name": "border-top-right-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "min-height" },
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "border" }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".navbar"],
            "declarations": [{ "type": "property", "name": "border-radius" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".navbar-header"],
            "declarations": [{ "type": "property", "name": "float" }]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-collapse"],
        "declarations": [
          { "type": "property", "name": "padding-right" },
          { "type": "property", "name": "padding-left" },
          { "type": "property", "name": "overflow-x" },
          { "type": "property", "name": "-webkit-overflow-scrolling" },
          { "type": "property", "name": "border-top" },
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-collapse.in"],
        "declarations": [{ "type": "property", "name": "overflow-y" }]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".navbar-collapse"],
            "declarations": [
              { "type": "property", "name": "width" },
              { "type": "property", "name": "border-top" },
              { "type": "property", "name": "-webkit-box-shadow" },
              { "type": "property", "name": "box-shadow" }
            ]
          },
          {
            "type": "rule",
            "selectors": [".navbar-collapse.collapse"],
            "declarations": [
              { "type": "property", "name": "display" },
              { "type": "property", "name": "height" },
              { "type": "property", "name": "padding-bottom" },
              { "type": "property", "name": "overflow" }
            ]
          },
          {
            "type": "rule",
            "selectors": [".navbar-collapse.in"],
            "declarations": [{ "type": "property", "name": "overflow-y" }]
          },
          {
            "type": "rule",
            "selectors": [
              ".navbar-fixed-top .navbar-collapse",
              ".navbar-static-top .navbar-collapse",
              ".navbar-fixed-bottom .navbar-collapse"
            ],
            "declarations": [
              { "type": "property", "name": "padding-right" },
              { "type": "property", "name": "padding-left" }
            ]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".navbar-fixed-top .navbar-collapse",
          ".navbar-fixed-bottom .navbar-collapse"
        ],
        "declarations": [{ "type": "property", "name": "max-height" }]
      },
      {
        "type": "media",
        "name": "(max-device-width: 480px) and (orientation: landscape)",
        "rules": [
          {
            "type": "rule",
            "selectors": [
              ".navbar-fixed-top .navbar-collapse",
              ".navbar-fixed-bottom .navbar-collapse"
            ],
            "declarations": [{ "type": "property", "name": "max-height" }]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".container > .navbar-header",
          ".container-fluid > .navbar-header",
          ".container > .navbar-collapse",
          ".container-fluid > .navbar-collapse"
        ],
        "declarations": [
          { "type": "property", "name": "margin-right" },
          { "type": "property", "name": "margin-left" }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [
              ".container > .navbar-header",
              ".container-fluid > .navbar-header",
              ".container > .navbar-collapse",
              ".container-fluid > .navbar-collapse"
            ],
            "declarations": [
              { "type": "property", "name": "margin-right" },
              { "type": "property", "name": "margin-left" }
            ]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-static-top"],
        "declarations": [
          { "type": "property", "name": "z-index" },
          { "type": "property", "name": "border-width" }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".navbar-static-top"],
            "declarations": [{ "type": "property", "name": "border-radius" }]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-fixed-top", ".navbar-fixed-bottom"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "right" },
          { "type": "property", "name": "left" },
          { "type": "property", "name": "z-index" }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".navbar-fixed-top", ".navbar-fixed-bottom"],
            "declarations": [{ "type": "property", "name": "border-radius" }]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-fixed-top"],
        "declarations": [
          { "type": "property", "name": "top" },
          { "type": "property", "name": "border-width" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-fixed-bottom"],
        "declarations": [
          { "type": "property", "name": "bottom" },
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "border-width" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-brand"],
        "declarations": [
          { "type": "property", "name": "float" },
          { "type": "property", "name": "height" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-brand:hover", ".navbar-brand:focus"],
        "declarations": [{ "type": "property", "name": "text-decoration" }]
      },
      {
        "type": "rule",
        "selectors": [".navbar-brand > img"],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [
              ".navbar > .container .navbar-brand",
              ".navbar > .container-fluid .navbar-brand"
            ],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-toggle"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "float" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "margin-right" },
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "border" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-toggle:focus"],
        "declarations": [{ "type": "property", "name": "outline" }]
      },
      {
        "type": "rule",
        "selectors": [".navbar-toggle .icon-bar"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "width" },
          { "type": "property", "name": "height" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-toggle .icon-bar + .icon-bar"],
        "declarations": [{ "type": "property", "name": "margin-top" }]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".navbar-toggle"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-nav"],
        "declarations": [{ "type": "property", "name": "margin" }]
      },
      {
        "type": "rule",
        "selectors": [".navbar-nav > li > a"],
        "declarations": [
          { "type": "property", "name": "padding-top" },
          { "type": "property", "name": "padding-bottom" },
          { "type": "property", "name": "line-height" }
        ]
      },
      {
        "type": "media",
        "name": "(max-width: 767px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".navbar-nav .open .dropdown-menu"],
            "declarations": [
              { "type": "property", "name": "position" },
              { "type": "property", "name": "float" },
              { "type": "property", "name": "width" },
              { "type": "property", "name": "margin-top" },
              { "type": "property", "name": "background-color" },
              { "type": "property", "name": "border" },
              { "type": "property", "name": "-webkit-box-shadow" },
              { "type": "property", "name": "box-shadow" }
            ]
          },
          {
            "type": "rule",
            "selectors": [
              ".navbar-nav .open .dropdown-menu > li > a",
              ".navbar-nav .open .dropdown-menu .dropdown-header"
            ],
            "declarations": [{ "type": "property", "name": "padding" }]
          },
          {
            "type": "rule",
            "selectors": [".navbar-nav .open .dropdown-menu > li > a"],
            "declarations": [{ "type": "property", "name": "line-height" }]
          },
          {
            "type": "rule",
            "selectors": [
              ".navbar-nav .open .dropdown-menu > li > a:hover",
              ".navbar-nav .open .dropdown-menu > li > a:focus"
            ],
            "declarations": [{ "type": "property", "name": "background-image" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".navbar-nav"],
            "declarations": [
              { "type": "property", "name": "float" },
              { "type": "property", "name": "margin" }
            ]
          },
          {
            "type": "rule",
            "selectors": [".navbar-nav > li"],
            "declarations": [{ "type": "property", "name": "float" }]
          },
          {
            "type": "rule",
            "selectors": [".navbar-nav > li > a"],
            "declarations": [
              { "type": "property", "name": "padding-top" },
              { "type": "property", "name": "padding-bottom" }
            ]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-form"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "margin-right" },
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "margin-left" },
          { "type": "property", "name": "border-top" },
          { "type": "property", "name": "border-bottom" },
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".navbar-form .form-group"],
            "declarations": [
              { "type": "property", "name": "display" },
              { "type": "property", "name": "margin-bottom" },
              { "type": "property", "name": "vertical-align" }
            ]
          },
          {
            "type": "rule",
            "selectors": [".navbar-form .form-control"],
            "declarations": [
              { "type": "property", "name": "display" },
              { "type": "property", "name": "width" },
              { "type": "property", "name": "vertical-align" }
            ]
          },
          {
            "type": "rule",
            "selectors": [".navbar-form .form-control-static"],
            "declarations": [{ "type": "property", "name": "display" }]
          },
          {
            "type": "rule",
            "selectors": [".navbar-form .input-group"],
            "declarations": [
              { "type": "property", "name": "display" },
              { "type": "property", "name": "vertical-align" }
            ]
          },
          {
            "type": "rule",
            "selectors": [
              ".navbar-form .input-group .input-group-addon",
              ".navbar-form .input-group .input-group-btn",
              ".navbar-form .input-group .form-control"
            ],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".navbar-form .input-group > .form-control"],
            "declarations": [{ "type": "property", "name": "width" }]
          },
          {
            "type": "rule",
            "selectors": [".navbar-form .control-label"],
            "declarations": [
              { "type": "property", "name": "margin-bottom" },
              { "type": "property", "name": "vertical-align" }
            ]
          },
          {
            "type": "rule",
            "selectors": [".navbar-form .radio", ".navbar-form .checkbox"],
            "declarations": [
              { "type": "property", "name": "display" },
              { "type": "property", "name": "margin-top" },
              { "type": "property", "name": "margin-bottom" },
              { "type": "property", "name": "vertical-align" }
            ]
          },
          {
            "type": "rule",
            "selectors": [
              ".navbar-form .radio label",
              ".navbar-form .checkbox label"
            ],
            "declarations": [{ "type": "property", "name": "padding-left" }]
          },
          {
            "type": "rule",
            "selectors": [
              ".navbar-form .radio input[type=\"radio\"]",
              ".navbar-form .checkbox input[type=\"checkbox\"]"
            ],
            "declarations": [
              { "type": "property", "name": "position" },
              { "type": "property", "name": "margin-left" }
            ]
          },
          {
            "type": "rule",
            "selectors": [".navbar-form .has-feedback .form-control-feedback"],
            "declarations": [{ "type": "property", "name": "top" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(max-width: 767px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".navbar-form .form-group"],
            "declarations": [{ "type": "property", "name": "margin-bottom" }]
          },
          {
            "type": "rule",
            "selectors": [".navbar-form .form-group:last-child"],
            "declarations": [{ "type": "property", "name": "margin-bottom" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".navbar-form"],
            "declarations": [
              { "type": "property", "name": "width" },
              { "type": "property", "name": "padding-top" },
              { "type": "property", "name": "padding-bottom" },
              { "type": "property", "name": "margin-right" },
              { "type": "property", "name": "margin-left" },
              { "type": "property", "name": "border" },
              { "type": "property", "name": "-webkit-box-shadow" },
              { "type": "property", "name": "box-shadow" }
            ]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-nav > li > .dropdown-menu"],
        "declarations": [
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "border-top-left-radius" },
          { "type": "property", "name": "border-top-right-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-fixed-bottom .navbar-nav > li > .dropdown-menu"],
        "declarations": [
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "border-top-left-radius" },
          { "type": "property", "name": "border-top-right-radius" },
          { "type": "property", "name": "border-bottom-right-radius" },
          { "type": "property", "name": "border-bottom-left-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-btn"],
        "declarations": [
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "margin-bottom" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-btn.btn-sm"],
        "declarations": [
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "margin-bottom" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-btn.btn-xs"],
        "declarations": [
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "margin-bottom" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-text"],
        "declarations": [
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "margin-bottom" }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".navbar-text"],
            "declarations": [
              { "type": "property", "name": "float" },
              { "type": "property", "name": "margin-right" },
              { "type": "property", "name": "margin-left" }
            ]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".navbar-left"],
            "declarations": [{ "type": "property", "name": "float" }]
          },
          {
            "type": "rule",
            "selectors": [".navbar-right"],
            "declarations": [
              { "type": "property", "name": "float" },
              { "type": "property", "name": "margin-right" }
            ]
          },
          {
            "type": "rule",
            "selectors": [".navbar-right ~ .navbar-right"],
            "declarations": [{ "type": "property", "name": "margin-right" }]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-default"],
        "declarations": [
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-default .navbar-brand"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".navbar-default .navbar-brand:hover",
          ".navbar-default .navbar-brand:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-default .navbar-text"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".navbar-default .navbar-nav > li > a"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".navbar-default .navbar-nav > li > a:hover",
          ".navbar-default .navbar-nav > li > a:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".navbar-default .navbar-nav > .active > a",
          ".navbar-default .navbar-nav > .active > a:hover",
          ".navbar-default .navbar-nav > .active > a:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".navbar-default .navbar-nav > .disabled > a",
          ".navbar-default .navbar-nav > .disabled > a:hover",
          ".navbar-default .navbar-nav > .disabled > a:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-default .navbar-toggle"],
        "declarations": [{ "type": "property", "name": "border-color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".navbar-default .navbar-toggle:hover",
          ".navbar-default .navbar-toggle:focus"
        ],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [".navbar-default .navbar-toggle .icon-bar"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".navbar-default .navbar-collapse",
          ".navbar-default .navbar-form"
        ],
        "declarations": [{ "type": "property", "name": "border-color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".navbar-default .navbar-nav > .open > a",
          ".navbar-default .navbar-nav > .open > a:hover",
          ".navbar-default .navbar-nav > .open > a:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "media",
        "name": "(max-width: 767px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [
              ".navbar-default .navbar-nav .open .dropdown-menu > li > a"
            ],
            "declarations": [{ "type": "property", "name": "color" }]
          },
          {
            "type": "rule",
            "selectors": [
              ".navbar-default .navbar-nav .open .dropdown-menu > li > a:hover",
              ".navbar-default .navbar-nav .open .dropdown-menu > li > a:focus"
            ],
            "declarations": [
              { "type": "property", "name": "color" },
              { "type": "property", "name": "background-color" }
            ]
          },
          {
            "type": "rule",
            "selectors": [
              ".navbar-default .navbar-nav .open .dropdown-menu > .active > a",
              ".navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover",
              ".navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus"
            ],
            "declarations": [
              { "type": "property", "name": "color" },
              { "type": "property", "name": "background-color" }
            ]
          },
          {
            "type": "rule",
            "selectors": [
              ".navbar-default .navbar-nav .open .dropdown-menu > .disabled > a",
              ".navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover",
              ".navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus"
            ],
            "declarations": [
              { "type": "property", "name": "color" },
              { "type": "property", "name": "background-color" }
            ]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-default .navbar-link"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".navbar-default .navbar-link:hover"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".navbar-default .btn-link"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".navbar-default .btn-link:hover",
          ".navbar-default .btn-link:focus"
        ],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".navbar-default .btn-link[disabled]:hover",
          "fieldset[disabled] .navbar-default .btn-link:hover",
          ".navbar-default .btn-link[disabled]:focus",
          "fieldset[disabled] .navbar-default .btn-link:focus"
        ],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".navbar-inverse"],
        "declarations": [
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-inverse .navbar-brand"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".navbar-inverse .navbar-brand:hover",
          ".navbar-inverse .navbar-brand:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-inverse .navbar-text"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".navbar-inverse .navbar-nav > li > a"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".navbar-inverse .navbar-nav > li > a:hover",
          ".navbar-inverse .navbar-nav > li > a:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".navbar-inverse .navbar-nav > .active > a",
          ".navbar-inverse .navbar-nav > .active > a:hover",
          ".navbar-inverse .navbar-nav > .active > a:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".navbar-inverse .navbar-nav > .disabled > a",
          ".navbar-inverse .navbar-nav > .disabled > a:hover",
          ".navbar-inverse .navbar-nav > .disabled > a:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-inverse .navbar-toggle"],
        "declarations": [{ "type": "property", "name": "border-color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".navbar-inverse .navbar-toggle:hover",
          ".navbar-inverse .navbar-toggle:focus"
        ],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [".navbar-inverse .navbar-toggle .icon-bar"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".navbar-inverse .navbar-collapse",
          ".navbar-inverse .navbar-form"
        ],
        "declarations": [{ "type": "property", "name": "border-color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".navbar-inverse .navbar-nav > .open > a",
          ".navbar-inverse .navbar-nav > .open > a:hover",
          ".navbar-inverse .navbar-nav > .open > a:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "media",
        "name": "(max-width: 767px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [
              ".navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header"
            ],
            "declarations": [{ "type": "property", "name": "border-color" }]
          },
          {
            "type": "rule",
            "selectors": [
              ".navbar-inverse .navbar-nav .open .dropdown-menu .divider"
            ],
            "declarations": [{ "type": "property", "name": "background-color" }]
          },
          {
            "type": "rule",
            "selectors": [
              ".navbar-inverse .navbar-nav .open .dropdown-menu > li > a"
            ],
            "declarations": [{ "type": "property", "name": "color" }]
          },
          {
            "type": "rule",
            "selectors": [
              ".navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover",
              ".navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus"
            ],
            "declarations": [
              { "type": "property", "name": "color" },
              { "type": "property", "name": "background-color" }
            ]
          },
          {
            "type": "rule",
            "selectors": [
              ".navbar-inverse .navbar-nav .open .dropdown-menu > .active > a",
              ".navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover",
              ".navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus"
            ],
            "declarations": [
              { "type": "property", "name": "color" },
              { "type": "property", "name": "background-color" }
            ]
          },
          {
            "type": "rule",
            "selectors": [
              ".navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a",
              ".navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover",
              ".navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus"
            ],
            "declarations": [
              { "type": "property", "name": "color" },
              { "type": "property", "name": "background-color" }
            ]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".navbar-inverse .navbar-link"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".navbar-inverse .navbar-link:hover"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".navbar-inverse .btn-link"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".navbar-inverse .btn-link:hover",
          ".navbar-inverse .btn-link:focus"
        ],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".navbar-inverse .btn-link[disabled]:hover",
          "fieldset[disabled] .navbar-inverse .btn-link:hover",
          ".navbar-inverse .btn-link[disabled]:focus",
          "fieldset[disabled] .navbar-inverse .btn-link:focus"
        ],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".breadcrumb"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "list-style" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".breadcrumb > li"],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "rule",
        "selectors": [".breadcrumb > li + li:before"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "content" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".breadcrumb > .active"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".pagination"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "padding-left" },
          { "type": "property", "name": "margin" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".pagination > li"],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "rule",
        "selectors": [".pagination > li > a", ".pagination > li > span"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "float" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "margin-left" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-decoration" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".pagination > li:first-child > a",
          ".pagination > li:first-child > span"
        ],
        "declarations": [
          { "type": "property", "name": "margin-left" },
          { "type": "property", "name": "border-top-left-radius" },
          { "type": "property", "name": "border-bottom-left-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".pagination > li:last-child > a",
          ".pagination > li:last-child > span"
        ],
        "declarations": [
          { "type": "property", "name": "border-top-right-radius" },
          { "type": "property", "name": "border-bottom-right-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".pagination > li > a:hover",
          ".pagination > li > span:hover",
          ".pagination > li > a:focus",
          ".pagination > li > span:focus"
        ],
        "declarations": [
          { "type": "property", "name": "z-index" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".pagination > .active > a",
          ".pagination > .active > span",
          ".pagination > .active > a:hover",
          ".pagination > .active > span:hover",
          ".pagination > .active > a:focus",
          ".pagination > .active > span:focus"
        ],
        "declarations": [
          { "type": "property", "name": "z-index" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "cursor" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".pagination > .disabled > span",
          ".pagination > .disabled > span:hover",
          ".pagination > .disabled > span:focus",
          ".pagination > .disabled > a",
          ".pagination > .disabled > a:hover",
          ".pagination > .disabled > a:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "cursor" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".pagination-lg > li > a", ".pagination-lg > li > span"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".pagination-lg > li:first-child > a",
          ".pagination-lg > li:first-child > span"
        ],
        "declarations": [
          { "type": "property", "name": "border-top-left-radius" },
          { "type": "property", "name": "border-bottom-left-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".pagination-lg > li:last-child > a",
          ".pagination-lg > li:last-child > span"
        ],
        "declarations": [
          { "type": "property", "name": "border-top-right-radius" },
          { "type": "property", "name": "border-bottom-right-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".pagination-sm > li > a", ".pagination-sm > li > span"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".pagination-sm > li:first-child > a",
          ".pagination-sm > li:first-child > span"
        ],
        "declarations": [
          { "type": "property", "name": "border-top-left-radius" },
          { "type": "property", "name": "border-bottom-left-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".pagination-sm > li:last-child > a",
          ".pagination-sm > li:last-child > span"
        ],
        "declarations": [
          { "type": "property", "name": "border-top-right-radius" },
          { "type": "property", "name": "border-bottom-right-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".pager"],
        "declarations": [
          { "type": "property", "name": "padding-left" },
          { "type": "property", "name": "margin" },
          { "type": "property", "name": "text-align" },
          { "type": "property", "name": "list-style" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".pager li"],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "rule",
        "selectors": [".pager li > a", ".pager li > span"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".pager li > a:hover", ".pager li > a:focus"],
        "declarations": [
          { "type": "property", "name": "text-decoration" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".pager .next > a", ".pager .next > span"],
        "declarations": [{ "type": "property", "name": "float" }]
      },
      {
        "type": "rule",
        "selectors": [".pager .previous > a", ".pager .previous > span"],
        "declarations": [{ "type": "property", "name": "float" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".pager .disabled > a",
          ".pager .disabled > a:hover",
          ".pager .disabled > a:focus",
          ".pager .disabled > span"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "cursor" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".label"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "font-weight" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-align" },
          { "type": "property", "name": "white-space" },
          { "type": "property", "name": "vertical-align" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["a.label:hover", "a.label:focus"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-decoration" },
          { "type": "property", "name": "cursor" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".label:empty"],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "rule",
        "selectors": [".btn .label"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "top" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".label-default"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".label-default[href]:hover",
          ".label-default[href]:focus"
        ],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [".label-primary"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".label-primary[href]:hover",
          ".label-primary[href]:focus"
        ],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [".label-success"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".label-success[href]:hover",
          ".label-success[href]:focus"
        ],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [".label-info"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [".label-info[href]:hover", ".label-info[href]:focus"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [".label-warning"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".label-warning[href]:hover",
          ".label-warning[href]:focus"
        ],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [".label-danger"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [".label-danger[href]:hover", ".label-danger[href]:focus"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [".badge"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "min-width" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "font-weight" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-align" },
          { "type": "property", "name": "white-space" },
          { "type": "property", "name": "vertical-align" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".badge:empty"],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "rule",
        "selectors": [".btn .badge"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "top" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".btn-xs .badge", ".btn-group-xs > .btn .badge"],
        "declarations": [
          { "type": "property", "name": "top" },
          { "type": "property", "name": "padding" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["a.badge:hover", "a.badge:focus"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-decoration" },
          { "type": "property", "name": "cursor" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".list-group-item.active > .badge",
          ".nav-pills > .active > a > .badge"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".list-group-item > .badge"],
        "declarations": [{ "type": "property", "name": "float" }]
      },
      {
        "type": "rule",
        "selectors": [".list-group-item > .badge + .badge"],
        "declarations": [{ "type": "property", "name": "margin-right" }]
      },
      {
        "type": "rule",
        "selectors": [".nav-pills > li > a > .badge"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [".jumbotron"],
        "declarations": [
          { "type": "property", "name": "padding-top" },
          { "type": "property", "name": "padding-bottom" },
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".jumbotron h1", ".jumbotron .h1"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".jumbotron p"],
        "declarations": [
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "font-weight" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".jumbotron > hr"],
        "declarations": [{ "type": "property", "name": "border-top-color" }]
      },
      {
        "type": "rule",
        "selectors": [".container .jumbotron", ".container-fluid .jumbotron"],
        "declarations": [
          { "type": "property", "name": "padding-right" },
          { "type": "property", "name": "padding-left" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".jumbotron .container"],
        "declarations": [{ "type": "property", "name": "max-width" }]
      },
      {
        "type": "media",
        "name": "screen and (min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".jumbotron"],
            "declarations": [
              { "type": "property", "name": "padding-top" },
              { "type": "property", "name": "padding-bottom" }
            ]
          },
          {
            "type": "rule",
            "selectors": [
              ".container .jumbotron",
              ".container-fluid .jumbotron"
            ],
            "declarations": [
              { "type": "property", "name": "padding-right" },
              { "type": "property", "name": "padding-left" }
            ]
          },
          {
            "type": "rule",
            "selectors": [".jumbotron h1", ".jumbotron .h1"],
            "declarations": [{ "type": "property", "name": "font-size" }]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".thumbnail"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border" },
          { "type": "property", "name": "border-radius" },
          { "type": "property", "name": "-webkit-transition" },
          { "type": "property", "name": "-o-transition" },
          { "type": "property", "name": "transition" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".thumbnail > img", ".thumbnail a > img"],
        "declarations": [
          { "type": "property", "name": "margin-right" },
          { "type": "property", "name": "margin-left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          "a.thumbnail:hover",
          "a.thumbnail:focus",
          "a.thumbnail.active"
        ],
        "declarations": [{ "type": "property", "name": "border-color" }]
      },
      {
        "type": "rule",
        "selectors": [".thumbnail .caption"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".alert"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "border" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".alert h4"],
        "declarations": [
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".alert .alert-link"],
        "declarations": [{ "type": "property", "name": "font-weight" }]
      },
      {
        "type": "rule",
        "selectors": [".alert > p", ".alert > ul"],
        "declarations": [{ "type": "property", "name": "margin-bottom" }]
      },
      {
        "type": "rule",
        "selectors": [".alert > p + p"],
        "declarations": [{ "type": "property", "name": "margin-top" }]
      },
      {
        "type": "rule",
        "selectors": [".alert-dismissable", ".alert-dismissible"],
        "declarations": [{ "type": "property", "name": "padding-right" }]
      },
      {
        "type": "rule",
        "selectors": [".alert-dismissable .close", ".alert-dismissible .close"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "top" },
          { "type": "property", "name": "right" },
          { "type": "property", "name": "color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".alert-success"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".alert-success hr"],
        "declarations": [{ "type": "property", "name": "border-top-color" }]
      },
      {
        "type": "rule",
        "selectors": [".alert-success .alert-link"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".alert-info"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".alert-info hr"],
        "declarations": [{ "type": "property", "name": "border-top-color" }]
      },
      {
        "type": "rule",
        "selectors": [".alert-info .alert-link"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".alert-warning"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".alert-warning hr"],
        "declarations": [{ "type": "property", "name": "border-top-color" }]
      },
      {
        "type": "rule",
        "selectors": [".alert-warning .alert-link"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".alert-danger"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".alert-danger hr"],
        "declarations": [{ "type": "property", "name": "border-top-color" }]
      },
      {
        "type": "rule",
        "selectors": [".alert-danger .alert-link"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "keyframes",
        "name": "progress-bar-stripes",
        "prefix": "-webkit-",
        "rules": [
          {
            "type": "rule",
            "selectors": ["from"],
            "declarations": [
              { "type": "property", "name": "background-position" }
            ]
          },
          {
            "type": "rule",
            "selectors": ["to"],
            "declarations": [
              { "type": "property", "name": "background-position" }
            ]
          }
        ]
      },
      {
        "type": "keyframes",
        "name": "progress-bar-stripes",
        "prefix": "-o-",
        "rules": [
          {
            "type": "rule",
            "selectors": ["from"],
            "declarations": [
              { "type": "property", "name": "background-position" }
            ]
          },
          {
            "type": "rule",
            "selectors": ["to"],
            "declarations": [
              { "type": "property", "name": "background-position" }
            ]
          }
        ]
      },
      {
        "type": "keyframes",
        "name": "progress-bar-stripes",
        "rules": [
          {
            "type": "rule",
            "selectors": ["from"],
            "declarations": [
              { "type": "property", "name": "background-position" }
            ]
          },
          {
            "type": "rule",
            "selectors": ["to"],
            "declarations": [
              { "type": "property", "name": "background-position" }
            ]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".progress"],
        "declarations": [
          { "type": "property", "name": "height" },
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "overflow" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-radius" },
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".progress-bar"],
        "declarations": [
          { "type": "property", "name": "float" },
          { "type": "property", "name": "width" },
          { "type": "property", "name": "height" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-align" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" },
          { "type": "property", "name": "-webkit-transition" },
          { "type": "property", "name": "-o-transition" },
          { "type": "property", "name": "transition" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".progress-striped .progress-bar",
          ".progress-bar-striped"
        ],
        "declarations": [
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "-webkit-background-size" },
          { "type": "property", "name": "background-size" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".progress.active .progress-bar", ".progress-bar.active"],
        "declarations": [
          { "type": "property", "name": "-webkit-animation" },
          { "type": "property", "name": "-o-animation" },
          { "type": "property", "name": "animation" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".progress-bar-success"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [".progress-striped .progress-bar-success"],
        "declarations": [
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "background-image" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".progress-bar-info"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [".progress-striped .progress-bar-info"],
        "declarations": [
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "background-image" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".progress-bar-warning"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [".progress-striped .progress-bar-warning"],
        "declarations": [
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "background-image" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".progress-bar-danger"],
        "declarations": [{ "type": "property", "name": "background-color" }]
      },
      {
        "type": "rule",
        "selectors": [".progress-striped .progress-bar-danger"],
        "declarations": [
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "background-image" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".media"],
        "declarations": [{ "type": "property", "name": "margin-top" }]
      },
      {
        "type": "rule",
        "selectors": [".media:first-child"],
        "declarations": [{ "type": "property", "name": "margin-top" }]
      },
      {
        "type": "rule",
        "selectors": [".media", ".media-body"],
        "declarations": [
          { "type": "property", "name": "overflow" },
          { "type": "property", "name": "zoom" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".media-body"],
        "declarations": [{ "type": "property", "name": "width" }]
      },
      {
        "type": "rule",
        "selectors": [".media-object"],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "rule",
        "selectors": [".media-object.img-thumbnail"],
        "declarations": [{ "type": "property", "name": "max-width" }]
      },
      {
        "type": "rule",
        "selectors": [".media-right", ".media > .pull-right"],
        "declarations": [{ "type": "property", "name": "padding-left" }]
      },
      {
        "type": "rule",
        "selectors": [".media-left", ".media > .pull-left"],
        "declarations": [{ "type": "property", "name": "padding-right" }]
      },
      {
        "type": "rule",
        "selectors": [".media-left", ".media-right", ".media-body"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "vertical-align" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".media-middle"],
        "declarations": [{ "type": "property", "name": "vertical-align" }]
      },
      {
        "type": "rule",
        "selectors": [".media-bottom"],
        "declarations": [{ "type": "property", "name": "vertical-align" }]
      },
      {
        "type": "rule",
        "selectors": [".media-heading"],
        "declarations": [
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "margin-bottom" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".media-list"],
        "declarations": [
          { "type": "property", "name": "padding-left" },
          { "type": "property", "name": "list-style" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".list-group"],
        "declarations": [
          { "type": "property", "name": "padding-left" },
          { "type": "property", "name": "margin-bottom" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".list-group-item"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "display" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".list-group-item:first-child"],
        "declarations": [
          { "type": "property", "name": "border-top-left-radius" },
          { "type": "property", "name": "border-top-right-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".list-group-item:last-child"],
        "declarations": [
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "border-bottom-right-radius" },
          { "type": "property", "name": "border-bottom-left-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["a.list-group-item", "button.list-group-item"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          "a.list-group-item .list-group-item-heading",
          "button.list-group-item .list-group-item-heading"
        ],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          "a.list-group-item:hover",
          "button.list-group-item:hover",
          "a.list-group-item:focus",
          "button.list-group-item:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-decoration" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["button.list-group-item"],
        "declarations": [
          { "type": "property", "name": "width" },
          { "type": "property", "name": "text-align" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".list-group-item.disabled",
          ".list-group-item.disabled:hover",
          ".list-group-item.disabled:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "cursor" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".list-group-item.disabled .list-group-item-heading",
          ".list-group-item.disabled:hover .list-group-item-heading",
          ".list-group-item.disabled:focus .list-group-item-heading"
        ],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".list-group-item.disabled .list-group-item-text",
          ".list-group-item.disabled:hover .list-group-item-text",
          ".list-group-item.disabled:focus .list-group-item-text"
        ],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".list-group-item.active",
          ".list-group-item.active:hover",
          ".list-group-item.active:focus"
        ],
        "declarations": [
          { "type": "property", "name": "z-index" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".list-group-item.active .list-group-item-heading",
          ".list-group-item.active:hover .list-group-item-heading",
          ".list-group-item.active:focus .list-group-item-heading",
          ".list-group-item.active .list-group-item-heading > small",
          ".list-group-item.active:hover .list-group-item-heading > small",
          ".list-group-item.active:focus .list-group-item-heading > small",
          ".list-group-item.active .list-group-item-heading > .small",
          ".list-group-item.active:hover .list-group-item-heading > .small",
          ".list-group-item.active:focus .list-group-item-heading > .small"
        ],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".list-group-item.active .list-group-item-text",
          ".list-group-item.active:hover .list-group-item-text",
          ".list-group-item.active:focus .list-group-item-text"
        ],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".list-group-item-success"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          "a.list-group-item-success",
          "button.list-group-item-success"
        ],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          "a.list-group-item-success .list-group-item-heading",
          "button.list-group-item-success .list-group-item-heading"
        ],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          "a.list-group-item-success:hover",
          "button.list-group-item-success:hover",
          "a.list-group-item-success:focus",
          "button.list-group-item-success:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          "a.list-group-item-success.active",
          "button.list-group-item-success.active",
          "a.list-group-item-success.active:hover",
          "button.list-group-item-success.active:hover",
          "a.list-group-item-success.active:focus",
          "button.list-group-item-success.active:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".list-group-item-info"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["a.list-group-item-info", "button.list-group-item-info"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          "a.list-group-item-info .list-group-item-heading",
          "button.list-group-item-info .list-group-item-heading"
        ],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          "a.list-group-item-info:hover",
          "button.list-group-item-info:hover",
          "a.list-group-item-info:focus",
          "button.list-group-item-info:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          "a.list-group-item-info.active",
          "button.list-group-item-info.active",
          "a.list-group-item-info.active:hover",
          "button.list-group-item-info.active:hover",
          "a.list-group-item-info.active:focus",
          "button.list-group-item-info.active:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".list-group-item-warning"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          "a.list-group-item-warning",
          "button.list-group-item-warning"
        ],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          "a.list-group-item-warning .list-group-item-heading",
          "button.list-group-item-warning .list-group-item-heading"
        ],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          "a.list-group-item-warning:hover",
          "button.list-group-item-warning:hover",
          "a.list-group-item-warning:focus",
          "button.list-group-item-warning:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          "a.list-group-item-warning.active",
          "button.list-group-item-warning.active",
          "a.list-group-item-warning.active:hover",
          "button.list-group-item-warning.active:hover",
          "a.list-group-item-warning.active:focus",
          "button.list-group-item-warning.active:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".list-group-item-danger"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          "a.list-group-item-danger",
          "button.list-group-item-danger"
        ],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          "a.list-group-item-danger .list-group-item-heading",
          "button.list-group-item-danger .list-group-item-heading"
        ],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [
          "a.list-group-item-danger:hover",
          "button.list-group-item-danger:hover",
          "a.list-group-item-danger:focus",
          "button.list-group-item-danger:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          "a.list-group-item-danger.active",
          "button.list-group-item-danger.active",
          "a.list-group-item-danger.active:hover",
          "button.list-group-item-danger.active:hover",
          "a.list-group-item-danger.active:focus",
          "button.list-group-item-danger.active:focus"
        ],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".list-group-item-heading"],
        "declarations": [
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "margin-bottom" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".list-group-item-text"],
        "declarations": [
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "line-height" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".panel"],
        "declarations": [
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border" },
          { "type": "property", "name": "border-radius" },
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".panel-body"],
        "declarations": [{ "type": "property", "name": "padding" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-heading"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "border-bottom" },
          { "type": "property", "name": "border-top-left-radius" },
          { "type": "property", "name": "border-top-right-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".panel-heading > .dropdown .dropdown-toggle"],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-title"],
        "declarations": [
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel-title > a",
          ".panel-title > small",
          ".panel-title > .small",
          ".panel-title > small > a",
          ".panel-title > .small > a"
        ],
        "declarations": [{ "type": "property", "name": "color" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-footer"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-top" },
          { "type": "property", "name": "border-bottom-right-radius" },
          { "type": "property", "name": "border-bottom-left-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel > .list-group",
          ".panel > .panel-collapse > .list-group"
        ],
        "declarations": [{ "type": "property", "name": "margin-bottom" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel > .list-group .list-group-item",
          ".panel > .panel-collapse > .list-group .list-group-item"
        ],
        "declarations": [
          { "type": "property", "name": "border-width" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel > .list-group:first-child .list-group-item:first-child",
          ".panel > .panel-collapse > .list-group:first-child .list-group-item:first-child"
        ],
        "declarations": [
          { "type": "property", "name": "border-top" },
          { "type": "property", "name": "border-top-left-radius" },
          { "type": "property", "name": "border-top-right-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel > .list-group:last-child .list-group-item:last-child",
          ".panel > .panel-collapse > .list-group:last-child .list-group-item:last-child"
        ],
        "declarations": [
          { "type": "property", "name": "border-bottom" },
          { "type": "property", "name": "border-bottom-right-radius" },
          { "type": "property", "name": "border-bottom-left-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child"
        ],
        "declarations": [
          { "type": "property", "name": "border-top-left-radius" },
          { "type": "property", "name": "border-top-right-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel-heading + .list-group .list-group-item:first-child"
        ],
        "declarations": [{ "type": "property", "name": "border-top-width" }]
      },
      {
        "type": "rule",
        "selectors": [".list-group + .panel-footer"],
        "declarations": [{ "type": "property", "name": "border-top-width" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel > .table",
          ".panel > .table-responsive > .table",
          ".panel > .panel-collapse > .table"
        ],
        "declarations": [{ "type": "property", "name": "margin-bottom" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel > .table caption",
          ".panel > .table-responsive > .table caption",
          ".panel > .panel-collapse > .table caption"
        ],
        "declarations": [
          { "type": "property", "name": "padding-right" },
          { "type": "property", "name": "padding-left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel > .table:first-child",
          ".panel > .table-responsive:first-child > .table:first-child"
        ],
        "declarations": [
          { "type": "property", "name": "border-top-left-radius" },
          { "type": "property", "name": "border-top-right-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel > .table:first-child > thead:first-child > tr:first-child",
          ".panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child",
          ".panel > .table:first-child > tbody:first-child > tr:first-child",
          ".panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child"
        ],
        "declarations": [
          { "type": "property", "name": "border-top-left-radius" },
          { "type": "property", "name": "border-top-right-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel > .table:first-child > thead:first-child > tr:first-child td:first-child",
          ".panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child",
          ".panel > .table:first-child > tbody:first-child > tr:first-child td:first-child",
          ".panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child",
          ".panel > .table:first-child > thead:first-child > tr:first-child th:first-child",
          ".panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child",
          ".panel > .table:first-child > tbody:first-child > tr:first-child th:first-child",
          ".panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child"
        ],
        "declarations": [
          { "type": "property", "name": "border-top-left-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel > .table:first-child > thead:first-child > tr:first-child td:last-child",
          ".panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child",
          ".panel > .table:first-child > tbody:first-child > tr:first-child td:last-child",
          ".panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child",
          ".panel > .table:first-child > thead:first-child > tr:first-child th:last-child",
          ".panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child",
          ".panel > .table:first-child > tbody:first-child > tr:first-child th:last-child",
          ".panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child"
        ],
        "declarations": [
          { "type": "property", "name": "border-top-right-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel > .table:last-child",
          ".panel > .table-responsive:last-child > .table:last-child"
        ],
        "declarations": [
          { "type": "property", "name": "border-bottom-right-radius" },
          { "type": "property", "name": "border-bottom-left-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel > .table:last-child > tbody:last-child > tr:last-child",
          ".panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child",
          ".panel > .table:last-child > tfoot:last-child > tr:last-child",
          ".panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child"
        ],
        "declarations": [
          { "type": "property", "name": "border-bottom-right-radius" },
          { "type": "property", "name": "border-bottom-left-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel > .table:last-child > tbody:last-child > tr:last-child td:first-child",
          ".panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child",
          ".panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child",
          ".panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child",
          ".panel > .table:last-child > tbody:last-child > tr:last-child th:first-child",
          ".panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child",
          ".panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child",
          ".panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child"
        ],
        "declarations": [
          { "type": "property", "name": "border-bottom-left-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel > .table:last-child > tbody:last-child > tr:last-child td:last-child",
          ".panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child",
          ".panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child",
          ".panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child",
          ".panel > .table:last-child > tbody:last-child > tr:last-child th:last-child",
          ".panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child",
          ".panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child",
          ".panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child"
        ],
        "declarations": [
          { "type": "property", "name": "border-bottom-right-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel > .panel-body + .table",
          ".panel > .panel-body + .table-responsive",
          ".panel > .table + .panel-body",
          ".panel > .table-responsive + .panel-body"
        ],
        "declarations": [{ "type": "property", "name": "border-top" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel > .table > tbody:first-child > tr:first-child th",
          ".panel > .table > tbody:first-child > tr:first-child td"
        ],
        "declarations": [{ "type": "property", "name": "border-top" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel > .table-bordered",
          ".panel > .table-responsive > .table-bordered"
        ],
        "declarations": [{ "type": "property", "name": "border" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel > .table-bordered > thead > tr > th:first-child",
          ".panel > .table-responsive > .table-bordered > thead > tr > th:first-child",
          ".panel > .table-bordered > tbody > tr > th:first-child",
          ".panel > .table-responsive > .table-bordered > tbody > tr > th:first-child",
          ".panel > .table-bordered > tfoot > tr > th:first-child",
          ".panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child",
          ".panel > .table-bordered > thead > tr > td:first-child",
          ".panel > .table-responsive > .table-bordered > thead > tr > td:first-child",
          ".panel > .table-bordered > tbody > tr > td:first-child",
          ".panel > .table-responsive > .table-bordered > tbody > tr > td:first-child",
          ".panel > .table-bordered > tfoot > tr > td:first-child",
          ".panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child"
        ],
        "declarations": [{ "type": "property", "name": "border-left" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel > .table-bordered > thead > tr > th:last-child",
          ".panel > .table-responsive > .table-bordered > thead > tr > th:last-child",
          ".panel > .table-bordered > tbody > tr > th:last-child",
          ".panel > .table-responsive > .table-bordered > tbody > tr > th:last-child",
          ".panel > .table-bordered > tfoot > tr > th:last-child",
          ".panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child",
          ".panel > .table-bordered > thead > tr > td:last-child",
          ".panel > .table-responsive > .table-bordered > thead > tr > td:last-child",
          ".panel > .table-bordered > tbody > tr > td:last-child",
          ".panel > .table-responsive > .table-bordered > tbody > tr > td:last-child",
          ".panel > .table-bordered > tfoot > tr > td:last-child",
          ".panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child"
        ],
        "declarations": [{ "type": "property", "name": "border-right" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel > .table-bordered > thead > tr:first-child > td",
          ".panel > .table-responsive > .table-bordered > thead > tr:first-child > td",
          ".panel > .table-bordered > tbody > tr:first-child > td",
          ".panel > .table-responsive > .table-bordered > tbody > tr:first-child > td",
          ".panel > .table-bordered > thead > tr:first-child > th",
          ".panel > .table-responsive > .table-bordered > thead > tr:first-child > th",
          ".panel > .table-bordered > tbody > tr:first-child > th",
          ".panel > .table-responsive > .table-bordered > tbody > tr:first-child > th"
        ],
        "declarations": [{ "type": "property", "name": "border-bottom" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel > .table-bordered > tbody > tr:last-child > td",
          ".panel > .table-responsive > .table-bordered > tbody > tr:last-child > td",
          ".panel > .table-bordered > tfoot > tr:last-child > td",
          ".panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td",
          ".panel > .table-bordered > tbody > tr:last-child > th",
          ".panel > .table-responsive > .table-bordered > tbody > tr:last-child > th",
          ".panel > .table-bordered > tfoot > tr:last-child > th",
          ".panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th"
        ],
        "declarations": [{ "type": "property", "name": "border-bottom" }]
      },
      {
        "type": "rule",
        "selectors": [".panel > .table-responsive"],
        "declarations": [
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "border" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".panel-group"],
        "declarations": [{ "type": "property", "name": "margin-bottom" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-group .panel"],
        "declarations": [
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".panel-group .panel + .panel"],
        "declarations": [{ "type": "property", "name": "margin-top" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-group .panel-heading"],
        "declarations": [{ "type": "property", "name": "border-bottom" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel-group .panel-heading + .panel-collapse > .panel-body",
          ".panel-group .panel-heading + .panel-collapse > .list-group"
        ],
        "declarations": [{ "type": "property", "name": "border-top" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-group .panel-footer"],
        "declarations": [{ "type": "property", "name": "border-top" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel-group .panel-footer + .panel-collapse .panel-body"
        ],
        "declarations": [{ "type": "property", "name": "border-bottom" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-default"],
        "declarations": [{ "type": "property", "name": "border-color" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-default > .panel-heading"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel-default > .panel-heading + .panel-collapse > .panel-body"
        ],
        "declarations": [{ "type": "property", "name": "border-top-color" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-default > .panel-heading .badge"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel-default > .panel-footer + .panel-collapse > .panel-body"
        ],
        "declarations": [{ "type": "property", "name": "border-bottom-color" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-primary"],
        "declarations": [{ "type": "property", "name": "border-color" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-primary > .panel-heading"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel-primary > .panel-heading + .panel-collapse > .panel-body"
        ],
        "declarations": [{ "type": "property", "name": "border-top-color" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-primary > .panel-heading .badge"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel-primary > .panel-footer + .panel-collapse > .panel-body"
        ],
        "declarations": [{ "type": "property", "name": "border-bottom-color" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-success"],
        "declarations": [{ "type": "property", "name": "border-color" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-success > .panel-heading"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel-success > .panel-heading + .panel-collapse > .panel-body"
        ],
        "declarations": [{ "type": "property", "name": "border-top-color" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-success > .panel-heading .badge"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel-success > .panel-footer + .panel-collapse > .panel-body"
        ],
        "declarations": [{ "type": "property", "name": "border-bottom-color" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-info"],
        "declarations": [{ "type": "property", "name": "border-color" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-info > .panel-heading"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel-info > .panel-heading + .panel-collapse > .panel-body"
        ],
        "declarations": [{ "type": "property", "name": "border-top-color" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-info > .panel-heading .badge"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel-info > .panel-footer + .panel-collapse > .panel-body"
        ],
        "declarations": [{ "type": "property", "name": "border-bottom-color" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-warning"],
        "declarations": [{ "type": "property", "name": "border-color" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-warning > .panel-heading"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel-warning > .panel-heading + .panel-collapse > .panel-body"
        ],
        "declarations": [{ "type": "property", "name": "border-top-color" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-warning > .panel-heading .badge"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel-warning > .panel-footer + .panel-collapse > .panel-body"
        ],
        "declarations": [{ "type": "property", "name": "border-bottom-color" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-danger"],
        "declarations": [{ "type": "property", "name": "border-color" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-danger > .panel-heading"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel-danger > .panel-heading + .panel-collapse > .panel-body"
        ],
        "declarations": [{ "type": "property", "name": "border-top-color" }]
      },
      {
        "type": "rule",
        "selectors": [".panel-danger > .panel-heading .badge"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".panel-danger > .panel-footer + .panel-collapse > .panel-body"
        ],
        "declarations": [{ "type": "property", "name": "border-bottom-color" }]
      },
      {
        "type": "rule",
        "selectors": [".embed-responsive"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "display" },
          { "type": "property", "name": "height" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "overflow" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".embed-responsive .embed-responsive-item",
          ".embed-responsive iframe",
          ".embed-responsive embed",
          ".embed-responsive object",
          ".embed-responsive video"
        ],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "top" },
          { "type": "property", "name": "bottom" },
          { "type": "property", "name": "left" },
          { "type": "property", "name": "width" },
          { "type": "property", "name": "height" },
          { "type": "property", "name": "border" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".embed-responsive-16by9"],
        "declarations": [{ "type": "property", "name": "padding-bottom" }]
      },
      {
        "type": "rule",
        "selectors": [".embed-responsive-4by3"],
        "declarations": [{ "type": "property", "name": "padding-bottom" }]
      },
      {
        "type": "rule",
        "selectors": [".well"],
        "declarations": [
          { "type": "property", "name": "min-height" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border" },
          { "type": "property", "name": "border-radius" },
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".well blockquote"],
        "declarations": [
          { "type": "property", "name": "border-color" },
          { "type": "property", "name": "border-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".well-lg"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".well-sm"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".close"],
        "declarations": [
          { "type": "property", "name": "float" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "font-weight" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-shadow" },
          { "type": "property", "name": "filter" },
          { "type": "property", "name": "opacity" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".close:hover", ".close:focus"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-decoration" },
          { "type": "property", "name": "cursor" },
          { "type": "property", "name": "filter" },
          { "type": "property", "name": "opacity" }
        ]
      },
      {
        "type": "rule",
        "selectors": ["button.close"],
        "declarations": [
          { "type": "property", "name": "-webkit-appearance" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "cursor" },
          { "type": "property", "name": "background" },
          { "type": "property", "name": "border" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".modal-open"],
        "declarations": [{ "type": "property", "name": "overflow" }]
      },
      {
        "type": "rule",
        "selectors": [".modal"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "top" },
          { "type": "property", "name": "right" },
          { "type": "property", "name": "bottom" },
          { "type": "property", "name": "left" },
          { "type": "property", "name": "z-index" },
          { "type": "property", "name": "display" },
          { "type": "property", "name": "overflow" },
          { "type": "property", "name": "-webkit-overflow-scrolling" },
          { "type": "property", "name": "outline" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".modal.fade .modal-dialog"],
        "declarations": [
          { "type": "property", "name": "-webkit-transition" },
          { "type": "property", "name": "-o-transition" },
          { "type": "property", "name": "transition" },
          { "type": "property", "name": "-webkit-transform" },
          { "type": "property", "name": "-ms-transform" },
          { "type": "property", "name": "-o-transform" },
          { "type": "property", "name": "transform" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".modal.in .modal-dialog"],
        "declarations": [
          { "type": "property", "name": "-webkit-transform" },
          { "type": "property", "name": "-ms-transform" },
          { "type": "property", "name": "-o-transform" },
          { "type": "property", "name": "transform" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".modal-open .modal"],
        "declarations": [
          { "type": "property", "name": "overflow-x" },
          { "type": "property", "name": "overflow-y" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".modal-dialog"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "width" },
          { "type": "property", "name": "margin" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".modal-content"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "-webkit-background-clip" },
          { "type": "property", "name": "background-clip" },
          { "type": "property", "name": "border" },
          { "type": "property", "name": "border" },
          { "type": "property", "name": "border-radius" },
          { "type": "property", "name": "outline" },
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".modal-backdrop"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "top" },
          { "type": "property", "name": "right" },
          { "type": "property", "name": "bottom" },
          { "type": "property", "name": "left" },
          { "type": "property", "name": "z-index" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".modal-backdrop.fade"],
        "declarations": [
          { "type": "property", "name": "filter" },
          { "type": "property", "name": "opacity" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".modal-backdrop.in"],
        "declarations": [
          { "type": "property", "name": "filter" },
          { "type": "property", "name": "opacity" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".modal-header"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "border-bottom" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".modal-header .close"],
        "declarations": [{ "type": "property", "name": "margin-top" }]
      },
      {
        "type": "rule",
        "selectors": [".modal-title"],
        "declarations": [
          { "type": "property", "name": "margin" },
          { "type": "property", "name": "line-height" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".modal-body"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "padding" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".modal-footer"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "text-align" },
          { "type": "property", "name": "border-top" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".modal-footer .btn + .btn"],
        "declarations": [
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "margin-left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".modal-footer .btn-group .btn + .btn"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [".modal-footer .btn-block + .btn-block"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [".modal-scrollbar-measure"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "top" },
          { "type": "property", "name": "width" },
          { "type": "property", "name": "height" },
          { "type": "property", "name": "overflow" }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".modal-dialog"],
            "declarations": [
              { "type": "property", "name": "width" },
              { "type": "property", "name": "margin" }
            ]
          },
          {
            "type": "rule",
            "selectors": [".modal-content"],
            "declarations": [
              { "type": "property", "name": "-webkit-box-shadow" },
              { "type": "property", "name": "box-shadow" }
            ]
          },
          {
            "type": "rule",
            "selectors": [".modal-sm"],
            "declarations": [{ "type": "property", "name": "width" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 992px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".modal-lg"],
            "declarations": [{ "type": "property", "name": "width" }]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".tooltip"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "z-index" },
          { "type": "property", "name": "display" },
          { "type": "property", "name": "font-family" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "font-style" },
          { "type": "property", "name": "font-weight" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "text-align" },
          { "type": "property", "name": "text-align" },
          { "type": "property", "name": "text-decoration" },
          { "type": "property", "name": "text-shadow" },
          { "type": "property", "name": "text-transform" },
          { "type": "property", "name": "letter-spacing" },
          { "type": "property", "name": "word-break" },
          { "type": "property", "name": "word-spacing" },
          { "type": "property", "name": "word-wrap" },
          { "type": "property", "name": "white-space" },
          { "type": "property", "name": "filter" },
          { "type": "property", "name": "opacity" },
          { "type": "property", "name": "line-break" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".tooltip.in"],
        "declarations": [
          { "type": "property", "name": "filter" },
          { "type": "property", "name": "opacity" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".tooltip.top"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "margin-top" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".tooltip.right"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "margin-left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".tooltip.bottom"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "margin-top" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".tooltip.left"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "margin-left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".tooltip-inner"],
        "declarations": [
          { "type": "property", "name": "max-width" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-align" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".tooltip-arrow"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "width" },
          { "type": "property", "name": "height" },
          { "type": "property", "name": "border-color" },
          { "type": "property", "name": "border-style" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".tooltip.top .tooltip-arrow"],
        "declarations": [
          { "type": "property", "name": "bottom" },
          { "type": "property", "name": "left" },
          { "type": "property", "name": "margin-left" },
          { "type": "property", "name": "border-width" },
          { "type": "property", "name": "border-top-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".tooltip.top-left .tooltip-arrow"],
        "declarations": [
          { "type": "property", "name": "right" },
          { "type": "property", "name": "bottom" },
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "border-width" },
          { "type": "property", "name": "border-top-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".tooltip.top-right .tooltip-arrow"],
        "declarations": [
          { "type": "property", "name": "bottom" },
          { "type": "property", "name": "left" },
          { "type": "property", "name": "margin-bottom" },
          { "type": "property", "name": "border-width" },
          { "type": "property", "name": "border-top-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".tooltip.right .tooltip-arrow"],
        "declarations": [
          { "type": "property", "name": "top" },
          { "type": "property", "name": "left" },
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "border-width" },
          { "type": "property", "name": "border-right-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".tooltip.left .tooltip-arrow"],
        "declarations": [
          { "type": "property", "name": "top" },
          { "type": "property", "name": "right" },
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "border-width" },
          { "type": "property", "name": "border-left-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".tooltip.bottom .tooltip-arrow"],
        "declarations": [
          { "type": "property", "name": "top" },
          { "type": "property", "name": "left" },
          { "type": "property", "name": "margin-left" },
          { "type": "property", "name": "border-width" },
          { "type": "property", "name": "border-bottom-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".tooltip.bottom-left .tooltip-arrow"],
        "declarations": [
          { "type": "property", "name": "top" },
          { "type": "property", "name": "right" },
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "border-width" },
          { "type": "property", "name": "border-bottom-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".tooltip.bottom-right .tooltip-arrow"],
        "declarations": [
          { "type": "property", "name": "top" },
          { "type": "property", "name": "left" },
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "border-width" },
          { "type": "property", "name": "border-bottom-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".popover"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "top" },
          { "type": "property", "name": "left" },
          { "type": "property", "name": "z-index" },
          { "type": "property", "name": "display" },
          { "type": "property", "name": "max-width" },
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "font-family" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "font-style" },
          { "type": "property", "name": "font-weight" },
          { "type": "property", "name": "line-height" },
          { "type": "property", "name": "text-align" },
          { "type": "property", "name": "text-align" },
          { "type": "property", "name": "text-decoration" },
          { "type": "property", "name": "text-shadow" },
          { "type": "property", "name": "text-transform" },
          { "type": "property", "name": "letter-spacing" },
          { "type": "property", "name": "word-break" },
          { "type": "property", "name": "word-spacing" },
          { "type": "property", "name": "word-wrap" },
          { "type": "property", "name": "white-space" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "-webkit-background-clip" },
          { "type": "property", "name": "background-clip" },
          { "type": "property", "name": "border" },
          { "type": "property", "name": "border" },
          { "type": "property", "name": "border-radius" },
          { "type": "property", "name": "-webkit-box-shadow" },
          { "type": "property", "name": "box-shadow" },
          { "type": "property", "name": "line-break" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".popover.top"],
        "declarations": [{ "type": "property", "name": "margin-top" }]
      },
      {
        "type": "rule",
        "selectors": [".popover.right"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [".popover.bottom"],
        "declarations": [{ "type": "property", "name": "margin-top" }]
      },
      {
        "type": "rule",
        "selectors": [".popover.left"],
        "declarations": [{ "type": "property", "name": "margin-left" }]
      },
      {
        "type": "rule",
        "selectors": [".popover-title"],
        "declarations": [
          { "type": "property", "name": "padding" },
          { "type": "property", "name": "margin" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border-bottom" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".popover-content"],
        "declarations": [{ "type": "property", "name": "padding" }]
      },
      {
        "type": "rule",
        "selectors": [".popover > .arrow", ".popover > .arrow:after"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "display" },
          { "type": "property", "name": "width" },
          { "type": "property", "name": "height" },
          { "type": "property", "name": "border-color" },
          { "type": "property", "name": "border-style" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".popover > .arrow"],
        "declarations": [{ "type": "property", "name": "border-width" }]
      },
      {
        "type": "rule",
        "selectors": [".popover > .arrow:after"],
        "declarations": [
          { "type": "property", "name": "content" },
          { "type": "property", "name": "border-width" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".popover.top > .arrow"],
        "declarations": [
          { "type": "property", "name": "bottom" },
          { "type": "property", "name": "left" },
          { "type": "property", "name": "margin-left" },
          { "type": "property", "name": "border-top-color" },
          { "type": "property", "name": "border-top-color" },
          { "type": "property", "name": "border-bottom-width" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".popover.top > .arrow:after"],
        "declarations": [
          { "type": "property", "name": "bottom" },
          { "type": "property", "name": "margin-left" },
          { "type": "property", "name": "content" },
          { "type": "property", "name": "border-top-color" },
          { "type": "property", "name": "border-bottom-width" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".popover.right > .arrow"],
        "declarations": [
          { "type": "property", "name": "top" },
          { "type": "property", "name": "left" },
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "border-right-color" },
          { "type": "property", "name": "border-right-color" },
          { "type": "property", "name": "border-left-width" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".popover.right > .arrow:after"],
        "declarations": [
          { "type": "property", "name": "bottom" },
          { "type": "property", "name": "left" },
          { "type": "property", "name": "content" },
          { "type": "property", "name": "border-right-color" },
          { "type": "property", "name": "border-left-width" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".popover.bottom > .arrow"],
        "declarations": [
          { "type": "property", "name": "top" },
          { "type": "property", "name": "left" },
          { "type": "property", "name": "margin-left" },
          { "type": "property", "name": "border-top-width" },
          { "type": "property", "name": "border-bottom-color" },
          { "type": "property", "name": "border-bottom-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".popover.bottom > .arrow:after"],
        "declarations": [
          { "type": "property", "name": "top" },
          { "type": "property", "name": "margin-left" },
          { "type": "property", "name": "content" },
          { "type": "property", "name": "border-top-width" },
          { "type": "property", "name": "border-bottom-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".popover.left > .arrow"],
        "declarations": [
          { "type": "property", "name": "top" },
          { "type": "property", "name": "right" },
          { "type": "property", "name": "margin-top" },
          { "type": "property", "name": "border-right-width" },
          { "type": "property", "name": "border-left-color" },
          { "type": "property", "name": "border-left-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".popover.left > .arrow:after"],
        "declarations": [
          { "type": "property", "name": "right" },
          { "type": "property", "name": "bottom" },
          { "type": "property", "name": "content" },
          { "type": "property", "name": "border-right-width" },
          { "type": "property", "name": "border-left-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".carousel"],
        "declarations": [{ "type": "property", "name": "position" }]
      },
      {
        "type": "rule",
        "selectors": [".carousel-inner"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "width" },
          { "type": "property", "name": "overflow" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".carousel-inner > .item"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "display" },
          { "type": "property", "name": "-webkit-transition" },
          { "type": "property", "name": "-o-transition" },
          { "type": "property", "name": "transition" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".carousel-inner > .item > img",
          ".carousel-inner > .item > a > img"
        ],
        "declarations": [{ "type": "property", "name": "line-height" }]
      },
      {
        "type": "media",
        "name": "all and (transform-3d), (-webkit-transform-3d)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".carousel-inner > .item"],
            "declarations": [
              { "type": "property", "name": "-webkit-transition" },
              { "type": "property", "name": "-o-transition" },
              { "type": "property", "name": "transition" },
              { "type": "property", "name": "-webkit-backface-visibility" },
              { "type": "property", "name": "backface-visibility" },
              { "type": "property", "name": "-webkit-perspective" },
              { "type": "property", "name": "perspective" }
            ]
          },
          {
            "type": "rule",
            "selectors": [
              ".carousel-inner > .item.next",
              ".carousel-inner > .item.active.right"
            ],
            "declarations": [
              { "type": "property", "name": "left" },
              { "type": "property", "name": "-webkit-transform" },
              { "type": "property", "name": "transform" }
            ]
          },
          {
            "type": "rule",
            "selectors": [
              ".carousel-inner > .item.prev",
              ".carousel-inner > .item.active.left"
            ],
            "declarations": [
              { "type": "property", "name": "left" },
              { "type": "property", "name": "-webkit-transform" },
              { "type": "property", "name": "transform" }
            ]
          },
          {
            "type": "rule",
            "selectors": [
              ".carousel-inner > .item.next.left",
              ".carousel-inner > .item.prev.right",
              ".carousel-inner > .item.active"
            ],
            "declarations": [
              { "type": "property", "name": "left" },
              { "type": "property", "name": "-webkit-transform" },
              { "type": "property", "name": "transform" }
            ]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".carousel-inner > .active",
          ".carousel-inner > .next",
          ".carousel-inner > .prev"
        ],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "rule",
        "selectors": [".carousel-inner > .active"],
        "declarations": [{ "type": "property", "name": "left" }]
      },
      {
        "type": "rule",
        "selectors": [".carousel-inner > .next", ".carousel-inner > .prev"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "top" },
          { "type": "property", "name": "width" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".carousel-inner > .next"],
        "declarations": [{ "type": "property", "name": "left" }]
      },
      {
        "type": "rule",
        "selectors": [".carousel-inner > .prev"],
        "declarations": [{ "type": "property", "name": "left" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".carousel-inner > .next.left",
          ".carousel-inner > .prev.right"
        ],
        "declarations": [{ "type": "property", "name": "left" }]
      },
      {
        "type": "rule",
        "selectors": [".carousel-inner > .active.left"],
        "declarations": [{ "type": "property", "name": "left" }]
      },
      {
        "type": "rule",
        "selectors": [".carousel-inner > .active.right"],
        "declarations": [{ "type": "property", "name": "left" }]
      },
      {
        "type": "rule",
        "selectors": [".carousel-control"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "top" },
          { "type": "property", "name": "bottom" },
          { "type": "property", "name": "left" },
          { "type": "property", "name": "width" },
          { "type": "property", "name": "font-size" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-align" },
          { "type": "property", "name": "text-shadow" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "filter" },
          { "type": "property", "name": "opacity" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".carousel-control.left"],
        "declarations": [
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "filter" },
          { "type": "property", "name": "background-repeat" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".carousel-control.right"],
        "declarations": [
          { "type": "property", "name": "right" },
          { "type": "property", "name": "left" },
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "background-image" },
          { "type": "property", "name": "filter" },
          { "type": "property", "name": "background-repeat" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".carousel-control:hover", ".carousel-control:focus"],
        "declarations": [
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-decoration" },
          { "type": "property", "name": "filter" },
          { "type": "property", "name": "outline" },
          { "type": "property", "name": "opacity" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".carousel-control .icon-prev",
          ".carousel-control .icon-next",
          ".carousel-control .glyphicon-chevron-left",
          ".carousel-control .glyphicon-chevron-right"
        ],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "top" },
          { "type": "property", "name": "z-index" },
          { "type": "property", "name": "display" },
          { "type": "property", "name": "margin-top" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".carousel-control .icon-prev",
          ".carousel-control .glyphicon-chevron-left"
        ],
        "declarations": [
          { "type": "property", "name": "left" },
          { "type": "property", "name": "margin-left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".carousel-control .icon-next",
          ".carousel-control .glyphicon-chevron-right"
        ],
        "declarations": [
          { "type": "property", "name": "right" },
          { "type": "property", "name": "margin-right" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".carousel-control .icon-prev",
          ".carousel-control .icon-next"
        ],
        "declarations": [
          { "type": "property", "name": "width" },
          { "type": "property", "name": "height" },
          { "type": "property", "name": "font-family" },
          { "type": "property", "name": "line-height" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".carousel-control .icon-prev:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".carousel-control .icon-next:before"],
        "declarations": [{ "type": "property", "name": "content" }]
      },
      {
        "type": "rule",
        "selectors": [".carousel-indicators"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "bottom" },
          { "type": "property", "name": "left" },
          { "type": "property", "name": "z-index" },
          { "type": "property", "name": "width" },
          { "type": "property", "name": "padding-left" },
          { "type": "property", "name": "margin-left" },
          { "type": "property", "name": "text-align" },
          { "type": "property", "name": "list-style" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".carousel-indicators li"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "width" },
          { "type": "property", "name": "height" },
          { "type": "property", "name": "margin" },
          { "type": "property", "name": "text-indent" },
          { "type": "property", "name": "cursor" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border" },
          { "type": "property", "name": "border-radius" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".carousel-indicators .active"],
        "declarations": [
          { "type": "property", "name": "width" },
          { "type": "property", "name": "height" },
          { "type": "property", "name": "margin" },
          { "type": "property", "name": "background-color" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".carousel-caption"],
        "declarations": [
          { "type": "property", "name": "position" },
          { "type": "property", "name": "right" },
          { "type": "property", "name": "bottom" },
          { "type": "property", "name": "left" },
          { "type": "property", "name": "z-index" },
          { "type": "property", "name": "padding-top" },
          { "type": "property", "name": "padding-bottom" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-align" },
          { "type": "property", "name": "text-shadow" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".carousel-caption .btn"],
        "declarations": [{ "type": "property", "name": "text-shadow" }]
      },
      {
        "type": "media",
        "name": "screen and (min-width: 768px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [
              ".carousel-control .glyphicon-chevron-left",
              ".carousel-control .glyphicon-chevron-right",
              ".carousel-control .icon-prev",
              ".carousel-control .icon-next"
            ],
            "declarations": [
              { "type": "property", "name": "width" },
              { "type": "property", "name": "height" },
              { "type": "property", "name": "margin-top" },
              { "type": "property", "name": "font-size" }
            ]
          },
          {
            "type": "rule",
            "selectors": [
              ".carousel-control .glyphicon-chevron-left",
              ".carousel-control .icon-prev"
            ],
            "declarations": [{ "type": "property", "name": "margin-left" }]
          },
          {
            "type": "rule",
            "selectors": [
              ".carousel-control .glyphicon-chevron-right",
              ".carousel-control .icon-next"
            ],
            "declarations": [{ "type": "property", "name": "margin-right" }]
          },
          {
            "type": "rule",
            "selectors": [".carousel-caption"],
            "declarations": [
              { "type": "property", "name": "right" },
              { "type": "property", "name": "left" },
              { "type": "property", "name": "padding-bottom" }
            ]
          },
          {
            "type": "rule",
            "selectors": [".carousel-indicators"],
            "declarations": [{ "type": "property", "name": "bottom" }]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".clearfix:before",
          ".clearfix:after",
          ".dl-horizontal dd:before",
          ".dl-horizontal dd:after",
          ".container:before",
          ".container:after",
          ".container-fluid:before",
          ".container-fluid:after",
          ".row:before",
          ".row:after",
          ".form-horizontal .form-group:before",
          ".form-horizontal .form-group:after",
          ".btn-toolbar:before",
          ".btn-toolbar:after",
          ".btn-group-vertical > .btn-group:before",
          ".btn-group-vertical > .btn-group:after",
          ".nav:before",
          ".nav:after",
          ".navbar:before",
          ".navbar:after",
          ".navbar-header:before",
          ".navbar-header:after",
          ".navbar-collapse:before",
          ".navbar-collapse:after",
          ".pager:before",
          ".pager:after",
          ".panel-body:before",
          ".panel-body:after",
          ".modal-header:before",
          ".modal-header:after",
          ".modal-footer:before",
          ".modal-footer:after"
        ],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "content" }
        ]
      },
      {
        "type": "rule",
        "selectors": [
          ".clearfix:after",
          ".dl-horizontal dd:after",
          ".container:after",
          ".container-fluid:after",
          ".row:after",
          ".form-horizontal .form-group:after",
          ".btn-toolbar:after",
          ".btn-group-vertical > .btn-group:after",
          ".nav:after",
          ".navbar:after",
          ".navbar-header:after",
          ".navbar-collapse:after",
          ".pager:after",
          ".panel-body:after",
          ".modal-header:after",
          ".modal-footer:after"
        ],
        "declarations": [{ "type": "property", "name": "clear" }]
      },
      {
        "type": "rule",
        "selectors": [".center-block"],
        "declarations": [
          { "type": "property", "name": "display" },
          { "type": "property", "name": "margin-right" },
          { "type": "property", "name": "margin-left" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".pull-right"],
        "declarations": [{ "type": "property", "name": "float" }]
      },
      {
        "type": "rule",
        "selectors": [".pull-left"],
        "declarations": [{ "type": "property", "name": "float" }]
      },
      {
        "type": "rule",
        "selectors": [".hide"],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "rule",
        "selectors": [".show"],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "rule",
        "selectors": [".invisible"],
        "declarations": [{ "type": "property", "name": "visibility" }]
      },
      {
        "type": "rule",
        "selectors": [".text-hide"],
        "declarations": [
          { "type": "property", "name": "font" },
          { "type": "property", "name": "color" },
          { "type": "property", "name": "text-shadow" },
          { "type": "property", "name": "background-color" },
          { "type": "property", "name": "border" }
        ]
      },
      {
        "type": "rule",
        "selectors": [".hidden"],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "rule",
        "selectors": [".affix"],
        "declarations": [{ "type": "property", "name": "position" }]
      },
      {
        "type": "rule",
        "selectors": ["@-ms-viewport"],
        "declarations": [{ "type": "property", "name": "width" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".visible-xs",
          ".visible-sm",
          ".visible-md",
          ".visible-lg"
        ],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "rule",
        "selectors": [
          ".visible-xs-block",
          ".visible-xs-inline",
          ".visible-xs-inline-block",
          ".visible-sm-block",
          ".visible-sm-inline",
          ".visible-sm-inline-block",
          ".visible-md-block",
          ".visible-md-inline",
          ".visible-md-inline-block",
          ".visible-lg-block",
          ".visible-lg-inline",
          ".visible-lg-inline-block"
        ],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "media",
        "name": "(max-width: 767px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".visible-xs"],
            "declarations": [{ "type": "property", "name": "display" }]
          },
          {
            "type": "rule",
            "selectors": ["table.visible-xs"],
            "declarations": [{ "type": "property", "name": "display" }]
          },
          {
            "type": "rule",
            "selectors": ["tr.visible-xs"],
            "declarations": [{ "type": "property", "name": "display" }]
          },
          {
            "type": "rule",
            "selectors": ["th.visible-xs", "td.visible-xs"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(max-width: 767px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".visible-xs-block"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(max-width: 767px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".visible-xs-inline"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(max-width: 767px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".visible-xs-inline-block"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px) and (max-width: 991px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".visible-sm"],
            "declarations": [{ "type": "property", "name": "display" }]
          },
          {
            "type": "rule",
            "selectors": ["table.visible-sm"],
            "declarations": [{ "type": "property", "name": "display" }]
          },
          {
            "type": "rule",
            "selectors": ["tr.visible-sm"],
            "declarations": [{ "type": "property", "name": "display" }]
          },
          {
            "type": "rule",
            "selectors": ["th.visible-sm", "td.visible-sm"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px) and (max-width: 991px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".visible-sm-block"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px) and (max-width: 991px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".visible-sm-inline"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px) and (max-width: 991px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".visible-sm-inline-block"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 992px) and (max-width: 1199px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".visible-md"],
            "declarations": [{ "type": "property", "name": "display" }]
          },
          {
            "type": "rule",
            "selectors": ["table.visible-md"],
            "declarations": [{ "type": "property", "name": "display" }]
          },
          {
            "type": "rule",
            "selectors": ["tr.visible-md"],
            "declarations": [{ "type": "property", "name": "display" }]
          },
          {
            "type": "rule",
            "selectors": ["th.visible-md", "td.visible-md"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 992px) and (max-width: 1199px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".visible-md-block"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 992px) and (max-width: 1199px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".visible-md-inline"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 992px) and (max-width: 1199px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".visible-md-inline-block"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 1200px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".visible-lg"],
            "declarations": [{ "type": "property", "name": "display" }]
          },
          {
            "type": "rule",
            "selectors": ["table.visible-lg"],
            "declarations": [{ "type": "property", "name": "display" }]
          },
          {
            "type": "rule",
            "selectors": ["tr.visible-lg"],
            "declarations": [{ "type": "property", "name": "display" }]
          },
          {
            "type": "rule",
            "selectors": ["th.visible-lg", "td.visible-lg"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 1200px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".visible-lg-block"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 1200px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".visible-lg-inline"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 1200px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".visible-lg-inline-block"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(max-width: 767px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".hidden-xs"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 768px) and (max-width: 991px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".hidden-sm"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 992px) and (max-width: 1199px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".hidden-md"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "(min-width: 1200px)",
        "rules": [
          {
            "type": "rule",
            "selectors": [".hidden-lg"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".visible-print"],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "media",
        "name": "print",
        "rules": [
          {
            "type": "rule",
            "selectors": [".visible-print"],
            "declarations": [{ "type": "property", "name": "display" }]
          },
          {
            "type": "rule",
            "selectors": ["table.visible-print"],
            "declarations": [{ "type": "property", "name": "display" }]
          },
          {
            "type": "rule",
            "selectors": ["tr.visible-print"],
            "declarations": [{ "type": "property", "name": "display" }]
          },
          {
            "type": "rule",
            "selectors": ["th.visible-print", "td.visible-print"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".visible-print-block"],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "media",
        "name": "print",
        "rules": [
          {
            "type": "rule",
            "selectors": [".visible-print-block"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".visible-print-inline"],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "media",
        "name": "print",
        "rules": [
          {
            "type": "rule",
            "selectors": [".visible-print-inline"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "rule",
        "selectors": [".visible-print-inline-block"],
        "declarations": [{ "type": "property", "name": "display" }]
      },
      {
        "type": "media",
        "name": "print",
        "rules": [
          {
            "type": "rule",
            "selectors": [".visible-print-inline-block"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      },
      {
        "type": "media",
        "name": "print",
        "rules": [
          {
            "type": "rule",
            "selectors": [".hidden-print"],
            "declarations": [{ "type": "property", "name": "display" }]
          }
        ]
      }
    ]
  }
}
