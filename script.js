(function () {
  "use strict";
  var KEY = "ozornik-points-v2";
  function $(i) {
    return document.getElementById(i);
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c];
    });
  }
  function pad(n) {
    return String(n).length < 2 ? "0" + n : String(n);
  }
  function r2(n) {
    return Math.round(n * 100) / 100;
  }
  function fmt(n) {
    return String(r2(n)).replace(".", ",");
  }
  var WP = function (w, p) {
    return [
      ["Победитель", w],
      ["Участник", p],
    ];
  };
  var G = [
    { id: "abvg", name: "АБВГДейка", cat: "o", wk: 2, kind: "chk", p: 2 },
    { id: "kluch", name: "Ключ", cat: "o", wk: 2, kind: "chk", p: 2 },
    { id: "tabu", name: "Табу", cat: "o", wk: 2, kind: "chk", p: 2 },
    {
      id: "slova",
      name: "Слова в слове",
      cat: "o",
      wk: 3,
      kind: "num",
      p: 1,
      cap: 5,
      unit: "Слов",
    },
    {
      id: "skazka",
      name: "Новая сказка",
      cat: "o",
      wk: 3,
      kind: "num",
      p: 3,
      unit: "Предложений",
    },
    {
      id: "horovod",
      name: "Словесный хоровод",
      cat: "o",
      wk: 3,
      kind: "num",
      p: 2,
      unit: "Слов",
    },
    {
      id: "krah",
      name: "Крах",
      cat: "o",
      wk: 3,
      kind: "num",
      p: 2,
      unit: "Отговорок",
    },
    { id: "abbr", name: "Аббревиатуры", cat: "o", wk: 2, kind: "chk", p: 1 },
    { id: "plusminus", name: "Плюс/минус", cat: "o", wk: 2, kind: "chk", p: 2 },
    { id: "vydum", name: "Выдумщики", cat: "o", wk: 2, kind: "chk", p: 2 },
    {
      id: "korz",
      name: "Корзинка",
      cat: "o",
      wk: 2,
      kind: "chk",
      p: 1,
      first: "n",
    },
    {
      id: "kalam",
      name: "Каламбур",
      cat: "o",
      wk: 2,
      kind: "chk",
      p: 3,
      first: 1,
    },
    {
      id: "pole",
      name: "Поле чудес",
      cat: "o",
      wk: 3,
      kind: "comp",
      p: 2,
      w: 5,
      unit: "Букв",
    },
    {
      id: "poter",
      name: "Потеряшки",
      cat: "o",
      wk: 2,
      kind: "num",
      p: 3,
      unit: "Фраз",
    },
    {
      id: "arifm",
      name: "Арифметика",
      cat: "o",
      wk: 2,
      kind: "chk",
      p: 3,
      first: "n",
    },
    {
      id: "viktor",
      name: "Викторина",
      cat: "o",
      wk: 3,
      kind: "sel",
      first: 1,
      opts: [
        ["«Верно» / исправление", 3],
        ["Развёрнутый ответ", 4],
      ],
    },
    {
      id: "danet",
      name: "Данетки",
      cat: "o",
      wk: 0,
      kind: "comp",
      p: 2,
      w: 5,
      unit: "Качеств",
    },
    {
      id: "shifr",
      name: "Шифровальщики",
      cat: "o",
      wk: 3,
      kind: "chk",
      p: 4,
      first: 1,
    },
    {
      id: "klad",
      name: "Где же клад?",
      cat: "a",
      wk: 2,
      kind: "sel",
      opts: WP(8, 3),
      def: 1,
      win: 1,
    },
    {
      id: "dogon",
      name: "Догонялки",
      cat: "a",
      wk: 3,
      kind: "sel",
      opts: WP(5, 3),
      def: 1,
      win: 1,
    },
    {
      id: "babochka",
      name: "Захват бабочки",
      cat: "a",
      wk: 2,
      kind: "sel",
      opts: [
        ["Победитель", 6],
        ["Участник", 3],
        ["Победившая команда", 5],
        ["Команда участников", 2],
      ],
      def: 1,
    },
    {
      id: "labir",
      name: "Лабиринт",
      cat: "a",
      wk: 3,
      kind: "sel",
      opts: [
        ["Без ошибок", 5],
        ["1–2 ошибки", 4],
        ["3+ ошибок", 2],
      ],
    },
    {
      id: "pryatki",
      name: "Прятки",
      cat: "a",
      wk: 3,
      kind: "sel",
      opts: WP(5, 3),
      def: 1,
      win: 1,
    },
    {
      id: "tretij",
      name: "Третий лишний",
      cat: "a",
      wk: 2,
      kind: "sel",
      opts: WP(5, 3),
      def: 1,
      win: 1,
    },
    {
      id: "cunami",
      name: "Цунами",
      cat: "a",
      wk: 2,
      kind: "sel",
      opts: WP(5, 3),
      def: 1,
      win: 1,
    },
    {
      id: "ostrovok",
      name: "Островок",
      cat: "a",
      wk: 2,
      kind: "sel",
      opts: WP(5, 3),
      def: 1,
      win: 1,
    },
    {
      id: "lipuchki",
      name: "Липучки",
      cat: "a",
      wk: 2,
      kind: "sel",
      opts: WP(5, 3),
      def: 1,
      win: 1,
    },
    {
      id: "tri",
      name: "Три в ряд",
      cat: "a",
      wk: 2,
      kind: "sel",
      opts: [
        ["Победитель", 3],
        ["Ничья", 2],
        ["Участник", 1],
      ],
      def: 2,
    },
    {
      id: "vossozd",
      name: "Воссоздай кота",
      cat: "a",
      wk: 3,
      kind: "sel",
      opts: [
        ["Окрас точный", 8],
        ["Окрас менее похожий", 5],
      ],
    },
    {
      id: "duel",
      name: "Дуэль",
      cat: "a",
      wk: 3,
      kind: "sel",
      opts: WP(8, 5),
      def: 1,
      win: 1,
    },
    {
      id: "vnim",
      name: "Внимательные глазки",
      cat: "a",
      wk: 3,
      kind: "chk",
      p: 3,
      first: 1,
    },
    {
      id: "gonki",
      name: "Гонки",
      cat: "a",
      wk: 3,
      kind: "chk",
      p: 5,
      first: 1,
    },
  ];
  var B = {};
  G.forEach(function (g) {
    B[g.id] = g;
  });

  function todayIso() {
    var d = new Date();
    return (
      d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate())
    );
  }
  function fresh() {
    return {
      date: todayIso(),
      leader: "",
      t1: "",
      t2: "",
      watcher: "",
      raw: "",
      week: [],
      games: [],
      tab: "games",
      done: { o: false, a: false },
      pickOpen: true,
    };
  }
  var S = fresh();
  try {
    var sv = JSON.parse(localStorage.getItem(KEY) || "null");
    if (sv && typeof sv === "object") {
      var f = fresh();
      for (var k in f) if (sv[k] !== undefined) f[k] = sv[k];
      S = f;
    }
  } catch (e) {}
  S.games = (S.games || []).filter(function (g) {
    return B[g.id];
  });
  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(S));
    } catch (e) {}
  }
  function isWeek(id) {
    return S.week.indexOf(id) >= 0;
  }
  function gname(gi) {
    var id = S.games[gi].id,
      n = 0,
      tot = 0;
    S.games.forEach(function (x, i) {
      if (x.id === id) {
        tot++;
        if (i <= gi) n++;
      }
    });
    return B[id].name + (tot > 1 ? " #" + n : "");
  }

  function parseLine(line) {
    line = String(line)
      .replace(/\u00a0/g, " ")
      .replace(/[\u200b-\u200d\ufeff]/g, "")
      .trim();
    if (!line) return null;
    if (/^(№|n°|id(?=\s|$)|имя(?=\s|$)|участники\s*:?)/i.test(line))
      return { skip: true };
    var m;
    if (line.indexOf("\t") >= 0) {
      var cells = line
          .split("\t")
          .map(function (c) {
            return c.trim();
          })
          .filter(Boolean),
        idc = null;
      cells.forEach(function (c) {
        if (/^\d{3,}$/.test(c) && (!idc || c.length > idc.length)) idc = c;
      });
      var nc = cells.filter(function (c) {
        return /[A-Za-zА-Яа-яЁё]/.test(c);
      })[0];
      if (idc && nc) return { name: nc, id: idc };
    }
    m = line.match(/^(.+?)\s*\[(\d+)\]/);
    if (m) return { name: m[1].trim(), id: m[2] };
    m = line.match(/^(\d{3,})\s+(.+)$/);
    if (m) return { name: m[2].trim(), id: m[1] };
    m = line.match(/^(.+?)\s+(\d{3,})\s*$/);
    if (m) return { name: m[1].trim(), id: m[2] };
    return { bad: true };
  }
  var meta = { dups: 0, bad: 0, lead: false };
  function players() {
    var seen = {},
      out = [],
      L = parseLine(S.leader),
      lid = L && !L.skip && !L.bad ? L.id : null;
    meta = { dups: 0, bad: 0, lead: false };
    S.raw.split(/\r?\n/).forEach(function (l) {
      var p = parseLine(l);
      if (!p || p.skip) return;
      if (p.bad) {
        meta.bad++;
        return;
      }
      if (p.id === lid) {
        meta.lead = true;
        return;
      }
      if (seen[p.id]) {
        meta.dups++;
        return;
      }
      seen[p.id] = 1;
      out.push(p);
    });
    return out;
  }
  function nid(p) {
    return p.name + " [" + p.id + "]";
  }
  function personStr(raw, fb) {
    var p = parseLine(raw);
    if (p && !p.skip && !p.bad) return nid(p);
    return String(raw).trim() || fb || "";
  }

  function winners(n) {
    return n <= 4 ? 1 : n <= 7 ? 2 : 3 + Math.floor((n - 8) / 3);
  }
  function cnt(gs, id, k) {
    var c = gs.c[id];
    return (c && c[k]) || 0;
  }
  function cols(g) {
    if (g.kind === "chk")
      return [{ k: "a", l: "Раунды", s: g.p === 1 ? "" : "×" + fmt(g.p) }];
    if (g.kind === "num")
      return [{ k: "a", l: g.unit, s: g.p === 1 ? "" : "×" + fmt(g.p) }];
    if (g.kind === "comp")
      return [
        { k: "a", l: g.unit, s: g.p === 1 ? "" : "×" + fmt(g.p) },
        { k: "b", l: "Слово", s: "×" + fmt(g.w) },
      ];
    return g.opts.map(function (o, i) {
      return { k: "o" + i, l: o[0], s: "" };
    });
  }
  function val(gs, g, id, c) {
    return cnt(gs, id, c.k);
  }
  function gpts(gs, g, id) {
    var a = cnt(gs, id, "a"),
      s = 0;
    if (g.kind === "chk") return a * g.p;
    if (g.kind === "num") {
      s = a * g.p;
      return g.cap != null ? Math.min(s, gs.rounds * g.cap) : s;
    }
    if (g.kind === "comp") return a * g.p + cnt(gs, id, "b") * g.w;
    g.opts.forEach(function (o, i) {
      s += cnt(gs, id, "o" + i) * o[1];
    });
    return s;
  }
  function calc() {
    var P = players(),
      out = { P: P, games: [], tot: {} };
    P.forEach(function (p) {
      out.tot[p.id] = 0;
    });
    S.games.forEach(function (gs, gi) {
      var g = B[gs.id],
        mult = isWeek(gs.id) ? 1.5 : 1,
        per = {};
      P.forEach(function (p) {
        per[p.id] = r2(gpts(gs, g, p.id) * mult);
        out.tot[p.id] += per[p.id];
      });
      out.games.push({ gs: gs, g: g, mult: mult, per: per, name: gname(gi) });
    });
    P.forEach(function (p) {
      out.tot[p.id] = r2(out.tot[p.id]);
    });
    return out;
  }
  function gwarns(gs, g, P) {
    var w = [],
      R = gs.rounds,
      n = P.length;
    if (!n) return w;
    P.forEach(function (p) {
      var s = 0;
      if (g.kind === "chk") {
        s = cnt(gs, p.id, "a");
        if (s > R) w.push(p.name + ": верных " + s + ", а раундов " + R + ".");
      } else if (g.kind === "sel" && g.def !== undefined) {
        g.opts.forEach(function (o, i) {
          s += cnt(gs, p.id, "o" + i);
        });
        if (s > R) w.push(p.name + ": отметок " + s + ", а раундов " + R + ".");
      }
    });
    return w;
  }
  function warnsHtml(a) {
    return a.length
      ? '<div class="errors">' +
          a
            .map(function (x) {
              return "<div>" + esc(x) + "</div>";
            })
            .join("") +
          "</div>"
      : "";
  }

  function renderWeek() {
    function grp(cat, t) {
      return (
        '<div class="sub">' +
        t +
        '</div><div class="chips">' +
        G.filter(function (g) {
          return g.cat === cat && g.wk;
        })
          .map(function (g) {
            return (
              '<button type="button" class="chip' +
              (isWeek(g.id) ? " on" : "") +
              '" data-w="' +
              g.id +
              '">' +
              esc(g.name) +
              "</button>"
            );
          })
          .join("") +
        "</div>"
      );
    }
    $("weekBox").innerHTML = grp("o", "Устные") + grp("a", "Активные");
  }
  function renderWarn() {
    var P = players(),
      w = [];
    $("count").innerHTML = "Участников <b>" + P.length + "</b>";
    if (meta.bad) w.push("Не распознано строк без ID: " + meta.bad + ".");
    if (meta.dups) w.push("Повторов ID: " + meta.dups + " (лишние убраны).");
    if (meta.lead) w.push("Ведущий был в списке — убран из подсчёта.");
    if (S.leader.trim()) {
      var L = parseLine(S.leader);
      if (!L || L.skip || L.bad)
        w.push("Ведущего нужно писать в виде «Имя ID».");
    }
    if (S.watcher.trim()) {
      var W = parseLine(S.watcher);
      if (!W || W.skip || W.bad)
        w.push("Следящего нужно писать в виде «Имя ID».");
    }
    var el = $("warn");
    el.hidden = !w.length;
    el.innerHTML = w
      .map(function (x) {
        return "<div>" + esc(x) + "</div>";
      })
      .join("");
  }
  function renderTabs() {
    var t = [
      ["games", "Игры"],
      ["res", "Итоги и отчёты"],
    ];
    $("subtabs").innerHTML = t
      .map(function (x) {
        return (
          '<button type="button" class="tab' +
          (x[0] === S.tab ? " on" : "") +
          '" data-tab="' +
          x[0] +
          '">' +
          x[1] +
          "</button>"
        );
      })
      .join("");
    $("vGames").hidden = S.tab !== "games";
    $("vRes").hidden = S.tab !== "res";
  }
  function renderWork() {
    renderTabs();
    if (S.tab === "games") renderGames();
    else renderRes();
  }

  function ctrHtml(gi, id, c, v) {
    var a = ' data-gi="' + gi + '" data-id="' + id + '" data-key="' + c.k + '"';
    return (
      '<span class="ctr"><button type="button" data-act="dec"' +
      a +
      ' aria-label="минус">−</button><span class="v' +
      (v ? " on" : "") +
      '" data-k="' +
      gi +
      "|" +
      id +
      "|" +
      c.k +
      '">' +
      v +
      '</span><button type="button" data-act="inc"' +
      a +
      ' aria-label="плюс">+</button></span>'
    );
  }
  function gameBlock(gs, gi, P) {
    var g = B[gs.id],
      cs = cols(g),
      wk = isWeek(gs.id);
    var h =
      '<div class="gb"><div class="gh" data-act="fold" data-gi="' +
      gi +
      '"><div class="gi"><span class="gn">' +
      esc(gname(gi)) +
      "</span>" +
      (wk ? '<span class="badge">игра недели ×1,5</span>' : "") +
      '<small>раундов: <span data-rn="' +
      gi +
      '">' +
      gs.rounds +
      "</span></small></div><small>" +
      (gs.fold ? "показать" : "свернуть") +
      "</small></div>";
    if (gs.fold) return h + "</div>";
    h +=
      '<div class="body"><div class="row"><label class="row" style="gap:8px"><span class="stat">Всего раундов</span><span class="rctr"><button type="button" data-act="rdec" data-gi="' +
      gi +
      '" aria-label="минус раунд">−</button><input class="field rin" type="number" inputmode="numeric" min="1" max="200" data-act="rounds" data-gi="' +
      gi +
      '" value="' +
      gs.rounds +
      '"><button type="button" data-act="rinc" data-gi="' +
      gi +
      '" aria-label="плюс раунд">+</button></span></label><button class="btn sm danger" type="button" data-act="remove" data-gi="' +
      gi +
      '">Убрать игру</button></div>';
    h +=
      '<div class="warnbox" id="w' +
      gi +
      '">' +
      warnsHtml(gwarns(gs, g, P)) +
      "</div>";
    if (!P.length)
      return (
        h + '<div class="empty">Вставьте участников слева.</div></div></div>'
      );
    h += '<div class="tw"><table><thead><tr><th class="l sticky">Участник</th>';
    cs.forEach(function (c) {
      h +=
        "<th>" +
        esc(c.l) +
        (c.s && c.s.charAt(0) !== "×"
          ? "<small>" + esc(c.s) + "</small>"
          : "") +
        "</th>";
    });
    h += "</tr></thead><tbody>";
    P.forEach(function (p) {
      h +=
        '<tr><td class="l sticky" title="' +
        esc(nid(p)) +
        '">' +
        esc(p.name) +
        "</td>";
      cs.forEach(function (c) {
        h += "<td>" + ctrHtml(gi, p.id, c, val(gs, g, p.id, c)) + "</td>";
      });
      h += "</tr>";
    });
    return h + "</tbody></table></div></div></div>";
  }
  var Q = "";
  function norm(t) {
    return String(t).toLowerCase().replace(/ё/g, "е");
  }
  function renderPick() {
    var el = $("pick");
    if (!el) return;
    var used = {},
      q = norm(Q.trim()),
      h = "";
    S.games.forEach(function (g) {
      used[g.id] = (used[g.id] || 0) + 1;
    });
    [
      ["o", "Устные"],
      ["a", "Активные"],
    ].forEach(function (c) {
      var L = G.filter(function (g) {
        return g.cat === c[0] && (!q || norm(g.name).indexOf(q) >= 0);
      });
      if (L.length)
        h +=
          '<div class="sub">' +
          c[1] +
          '</div><div class="chips">' +
          L.map(function (g) {
            return (
              '<button type="button" class="chip add" data-act="add" data-game="' +
              g.id +
              '">' +
              (isWeek(g.id) ? "★ " : "") +
              esc(g.name) +
              (used[g.id] ? " · " + used[g.id] : "") +
              "</button>"
            );
          }).join("") +
          "</div>";
    });
    el.innerHTML =
      h ||
      '<div class="hint">' +
        (q ? "Ничего не найдено." : "Все игры уже добавлены.") +
        "</div>";
  }
  function renderGames() {
    var P = players(),
      el = $("vGames"),
      h = "";
    h +=
      '<div class="bar"><div class="label plain" style="flex:1">Добавить игру</div><button class="btn quiet" type="button" data-act="pick">' +
      (S.pickOpen ? "Скрыть список" : "Показать список") +
      "</button></div>";
    if (S.pickOpen)
      h +=
        '<input class="field" id="gSearch" type="search" autocomplete="off" aria-label="Поиск игры" value="' +
        esc(Q) +
        '"><div id="pick" class="pane"></div>';
    h += '<div class="label">Проведённые игры</div>';
    if (!S.games.length)
      h +=
        '<div class="empty">Выберите игру выше. Звёздочкой отмечены игры недели.</div>';
    S.games.forEach(function (gs, gi) {
      h += gameBlock(gs, gi, P);
    });
    el.innerHTML = h;
    renderPick();
  }
  function refresh() {
    var P = players();
    Array.prototype.forEach.call(
      document.querySelectorAll("[data-k]"),
      function (e) {
        var p = e.getAttribute("data-k").split("|"),
          gs = S.games[p[0]];
        if (!gs) return;
        var g = B[gs.id],
          c = cols(g).filter(function (x) {
            return x.k === p[2];
          })[0];
        if (!c) return;
        var v = val(gs, g, p[1], c);
        e.textContent = v;
        e.className = "v" + (v ? " on" : "");
      },
    );
    S.games.forEach(function (gs, gi) {
      var w = $("w" + gi);
      if (w) w.innerHTML = warnsHtml(gwarns(gs, B[gs.id], P));
      var rn = document.querySelector('[data-rn="' + gi + '"]');
      if (rn) rn.textContent = gs.rounds;
    });
  }

  function dateStr() {
    var m = String(S.date || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
    return m ? m[3] + "." + m[2] + "." + m[1].slice(2) : "дд.мм.гг";
  }
  function blogText(C) {
    var L = [dateStr(), "Баллы за игры:"];
    C.P.forEach(function (p) {
      var t = C.tot[p.id];
      if (t > 0) L.push(nid(p) + " — " + fmt(t));
    });
    return L.join("\n");
  }
  function hostText() {
    var L = [personStr(S.leader, "ВЕДУЩИЙ [АЙДИ]")];
    if (S.t1 && S.t2) L.push("Время: " + S.t1 + " - " + S.t2);
    if (S.watcher.trim()) L.push("Следил: " + personStr(S.watcher));
    var tot = {},
      ord = [];
    S.games.forEach(function (gs) {
      if (!(gs.id in tot)) {
        tot[gs.id] = 0;
        ord.push(gs.id);
      }
      tot[gs.id] += gs.rounds;
    });
    L.push(
      "Игры: " +
        ord
          .map(function (id) {
            return B[id].name + " (" + tot[id] + ")";
          })
          .join(", "),
    );
    return L.join("\n");
  }
  function renderRes() {
    var C = calc(),
      P = C.P,
      el = $("vRes");
    if (!P.length || !S.games.length) {
      el.innerHTML =
        '<div class="empty">' +
        (!P.length
          ? "Вставьте участников слева."
          : "Добавьте хотя бы одну игру.") +
        "</div>";
      return;
    }
    var order = P.slice().sort(function (a, b) {
      return C.tot[b.id] - C.tot[a.id];
    });
    var h =
      '<div class="label plain">Итоговые баллы</div><div class="tw"><table><thead><tr><th class="l sticky">Участник</th><th>ID</th>';
    C.games.forEach(function (x) {
      h += "<th>" + esc(x.name) + (x.mult > 1 ? " ×1,5" : "") + "</th>";
    });
    h += "<th>Итого</th></tr></thead><tbody>";
    order.forEach(function (p) {
      h +=
        '<tr><td class="l sticky">' +
        esc(p.name) +
        '</td><td class="m">' +
        p.id +
        "</td>";
      C.games.forEach(function (x) {
        h +=
          '<td class="m">' + (x.per[p.id] ? fmt(x.per[p.id]) : "·") + "</td>";
      });
      h += '<td class="p"><b>' + fmt(C.tot[p.id]) + "</b></td></tr>";
    });
    h += "</tbody></table></div>";
    var notes = [];
    if (!S.leader.trim()) notes.push("Не заполнен ведущий.");
    if (!(S.t1 && S.t2)) notes.push("Не заполнено время.");
    C.games.forEach(function (x) {
      gwarns(x.gs, x.g, P).forEach(function (m) {
        notes.push(x.name + ": " + m);
      });
    });
    h += warnsHtml(notes);
    h += '<div class="label">Отчёт под блог</div>';
    h +=
      '<textarea readonly id="repBlog" style="min-height:160px"></textarea><button class="btn main wide" type="button" data-act="copy" data-src="repBlog">Скопировать отчёт для блога</button>';
    h +=
      '<div class="label">Отчёт ведущего</div><textarea readonly id="repHost" style="min-height:110px"></textarea><button class="btn main wide" type="button" data-act="copy" data-src="repHost">Скопировать отчёт ведущего</button>';
    el.innerHTML = h;
    $("repBlog").value = blogText(C);
    $("repHost").value = hostText();
  }

  function copyText(text, done) {
    function fb() {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try {
        ok = document.execCommand("copy");
      } catch (e) {}
      document.body.removeChild(ta);
      done(ok);
    }
    if (navigator.clipboard && navigator.clipboard.writeText)
      navigator.clipboard.writeText(text).then(function () {
        done(true);
      }, fb);
    else fb();
  }
  function flash(b, m) {
    var o = b.textContent;
    b.textContent = m;
    setTimeout(function () {
      b.textContent = o;
    }, 1300);
  }
  function ask(title, text, yes, cb) {
    var m = $("modal");
    $("mTitle").textContent = title;
    $("mText").textContent = text;
    $("mYes").textContent = yes;
    m.hidden = false;
    function close() {
      m.hidden = true;
      $("mYes").onclick = null;
      $("mNo").onclick = null;
      m.onclick = null;
      document.removeEventListener("keydown", key);
    }
    function key(e) {
      if (e.key === "Escape") close();
    }
    $("mYes").onclick = function () {
      close();
      cb();
    };
    $("mNo").onclick = close;
    m.onclick = function (e) {
      if (e.target === m) close();
    };
    document.addEventListener("keydown", key);
    $("mNo").focus();
  }

  function maskTime(el) {
    el.addEventListener("input", function () {
      var d = this.value.replace(/\D/g, "").slice(0, 4);
      if (d.length >= 3) d = d.slice(0, 2) + ":" + d.slice(2);
      this.value = d;
    });
    el.addEventListener("blur", function () {
      var d = this.value.replace(/\D/g, "");
      if (!d) return;
      var h, m;
      if (d.length <= 2) {
        h = d;
        m = "00";
      } else {
        h = d.slice(0, 2);
        m = d.slice(2).padEnd(2, "0");
      }
      h = Math.min(23, parseInt(h, 10));
      m = Math.min(59, parseInt(m, 10));
      this.value = pad(h) + ":" + pad(m);
      this.dispatchEvent(new Event("input"));
    });
  }
  maskTime($("fT1"));
  maskTime($("fT2"));

  function refreshRes() {
    if (S.tab === "res") renderRes();
  }
  $("subtabs").addEventListener("click", function (e) {
    var b = e.target.closest("[data-tab]");
    if (!b) return;
    S.tab = b.getAttribute("data-tab");
    save();
    renderWork();
  });
  $("fDate").addEventListener("input", function () {
    S.date = this.value;
    save();
    refreshRes();
  });
  $("fLeader").addEventListener("input", function () {
    S.leader = this.value;
    save();
    renderWarn();
    renderWork();
  });
  $("fT1").addEventListener("input", function () {
    S.t1 = this.value;
    save();
    refreshRes();
  });
  $("fT2").addEventListener("input", function () {
    S.t2 = this.value;
    save();
    refreshRes();
  });
  $("fWatch").addEventListener("input", function () {
    S.watcher = this.value;
    save();
    renderWarn();
    refreshRes();
  });
  $("raw").addEventListener("input", function () {
    S.raw = this.value;
    save();
    renderWarn();
    renderWork();
  });
  $("clearRaw").addEventListener("click", function () {
    S.raw = "";
    $("raw").value = "";
    save();
    renderWarn();
    renderWork();
  });
  $("resetAll").addEventListener("click", function () {
    ask(
      "Сбросить всё?",
      "Участники, игры и счётчики будут удалены. Игры недели сохранятся.",
      "Сбросить",
      function () {
        var wk = S.week;
        S = fresh();
        S.week = wk;
        save();
        ["raw", "fLeader", "fT1", "fT2", "fWatch"].forEach(function (i) {
          $(i).value = "";
        });
        $("fDate").value = S.date;
        renderWarn();
        renderWork();
      },
    );
  });
  $("weekBox").addEventListener("click", function (e) {
    var b = e.target.closest("[data-w]");
    if (!b) return;
    var id = b.getAttribute("data-w"),
      i = S.week.indexOf(id);
    if (i >= 0) S.week.splice(i, 1);
    else S.week.push(id);
    save();
    renderWeek();
    renderWork();
  });
  $("work").addEventListener("click", function (e) {
    var b = e.target.closest("[data-act]");
    if (!b || b.tagName === "INPUT" || b.tagName === "SELECT") return;
    var act = b.getAttribute("data-act"),
      gi = parseInt(b.getAttribute("data-gi"), 10),
      id = b.getAttribute("data-id"),
      key = b.getAttribute("data-key");
    var gs = S.games[gi];
    if (act === "pick") {
      S.pickOpen = !S.pickOpen;
      save();
      renderGames();
      return;
    }
    if (act === "add") {
      var gid = b.getAttribute("data-game");
      if (!gid || !B[gid]) return;
      S.games.push({ id: gid, rounds: 1, c: {}, fold: false });
      Q = "";
      save();
      renderGames();
      return;
    }
    if (act === "copy") {
      copyText($(b.getAttribute("data-src")).value, function (ok) {
        flash(b, ok ? "Скопировано" : "Не вышло, выделите текст");
      });
      return;
    }
    if (act === "fold") {
      gs.fold = !gs.fold;
      save();
      renderGames();
      return;
    }
    if (!gs) return;
    if (act === "remove") {
      var rgi = gi,
        rnm = gname(gi);
      ask(
        "Убрать игру «" + rnm + "»?",
        "Вместе с ней удалятся все счётчики.",
        "Убрать",
        function () {
          S.games.splice(rgi, 1);
          save();
          renderGames();
        },
      );
      return;
    }
    if (act === "rinc" || act === "rdec") {
      gs.rounds = Math.max(
        1,
        Math.min(200, gs.rounds + (act === "rinc" ? 1 : -1)),
      );
      save();
      refresh();
      var ri = document.querySelector(
        'input[data-act="rounds"][data-gi="' + gi + '"]',
      );
      if (ri) ri.value = gs.rounds;
      return;
    }
    if (act === "inc" || act === "dec") {
      var row = gs.c[id] || (gs.c[id] = {});
      row[key] = Math.max(0, (row[key] || 0) + (act === "inc" ? 1 : -1));
      save();
      refresh();
    }
  });
  $("work").addEventListener("input", function (e) {
    var t = e.target;
    if (t.id === "gSearch") {
      Q = t.value;
      renderPick();
      return;
    }
    if (t.getAttribute("data-act") !== "rounds") return;
    var gs = S.games[parseInt(t.getAttribute("data-gi"), 10)];
    if (!gs) return;
    var n = parseInt(t.value, 10);
    if (!(n > 0)) return;
    gs.rounds = Math.min(200, n);
    save();
    refresh();
  });
  $("work").addEventListener("change", function (e) {
    var t = e.target,
      act = t.getAttribute("data-act");
    if (act === "rounds") {
      var gs = S.games[parseInt(t.getAttribute("data-gi"), 10)];
      t.value = gs.rounds;
    }
  });

  $("raw").value = S.raw;
  $("fLeader").value = S.leader;
  $("fT1").value = S.t1;
  $("fT2").value = S.t2;
  $("fWatch").value = S.watcher;
  $("fDate").value = S.date;
  var RL = {
    abvg: [["За верный ответ", "2"]],
    kluch: [["За верный ответ", "2"]],
    tabu: [["За верный ответ", "2"]],
    slova: [
      ["За каждое новое слово", "1"],
      ["Максимум за раунд", "5"],
    ],
    skazka: [["За подходящее предложение", "3"]],
    horovod: [["За каждое подходящее слово", "2"]],
    krah: [["За правильную отговорку", "2"]],
    abbr: [["За верный ответ", "1"]],
    plusminus: [["За ответ с плюсом и минусом", "2"]],
    vydum: [["За логичный ответ", "2"]],
    korz: [["За верный ответ в числе первых", "1"]],
    kalam: [["За верный ответ первому", "3"]],
    pole: [
      ["За верное слово первому", "5"],
      ["За угаданную букву", "2"],
    ],
    poter: [["За отгаданную фразу", "3"]],
    arifm: [["За верный ответ в числе первых", "3"]],
    viktor: [
      ["«Верно» / первое исправление", "3"],
      ["Развёрнутый ответ", "4"],
    ],
    danet: [
      ["За верный ответ первому", "5"],
      ["За угаданное качество", "2"],
    ],
    shifr: [["За верный ответ первому", "4"]],
    klad: [
      ["Победитель", "8"],
      ["Участник", "3"],
    ],
    dogon: [
      ["Победитель", "5"],
      ["Участник", "3"],
    ],
    babochka: [
      ["Победитель", "6"],
      ["Участник", "3"],
      ["Победившая команда", "5"],
      ["Команда участников", "2"],
    ],
    labir: [
      ["Без ошибок", "5"],
      ["1–2 ошибки", "4"],
      ["3 и более ошибок", "2"],
    ],
    pryatki: [
      ["Победитель", "5"],
      ["Участник", "3"],
    ],
    tretij: [
      ["Победитель", "5"],
      ["Участник", "3"],
    ],
    cunami: [
      ["Победитель", "5"],
      ["Участник", "3"],
    ],
    ostrovok: [
      ["Победитель", "5"],
      ["Участник", "3"],
    ],
    lipuchki: [
      ["Победитель", "5"],
      ["Участник", "3"],
    ],
    tri: [
      ["Победитель", "3"],
      ["Ничья", "2"],
      ["Участник", "1"],
    ],
    vossozd: [
      ["Окрас точный", "8"],
      ["Окрас менее похожий", "5"],
    ],
    duel: [
      ["Победитель", "8"],
      ["Участник", "5"],
    ],
    vnim: [["За верный ответ первому", "3"]],
    gonki: [["Победитель", "5"]],
  };
  function renderRules() {
    var h = "";
    [
      ["o", "Устные"],
      ["a", "Активные"],
    ].forEach(function (c) {
      h += '<div class="sub">' + c[1] + '</div><div class="rgrid">';
      G.filter(function (g) {
        return g.cat === c[0];
      }).forEach(function (g) {
        h +=
          '<div class="rule"><h3>' +
          esc(g.name) +
          "</h3><ul>" +
          (RL[g.id] || [])
            .map(function (r) {
              return (
                "<li><span>" +
                esc(r[0]) +
                "</span><b>" +
                esc(r[1]) +
                "</b></li>"
              );
            })
            .join("") +
          "</ul></div>";
      });
      h += "</div>";
    });
    $("rulesBox").innerHTML = h;
  }
  renderRules();
  var page = "home";
  function renderPage() {
    $("pHome").hidden = page !== "home";
    $("pCalc").hidden = page !== "calc";
    Array.prototype.forEach.call(
      document.querySelectorAll("#pages .tab"),
      function (b) {
        b.classList.toggle("on", b.getAttribute("data-page") === page);
      },
    );
  }
  $("pages").addEventListener("click", function (e) {
    var b = e.target.closest("[data-page]");
    if (!b) return;
    page = b.getAttribute("data-page");
    renderPage();
    window.scrollTo(0, 0);
  });
  renderPage();
  renderWeek();
  renderWarn();
  renderWork();
})();
