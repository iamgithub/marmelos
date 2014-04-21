// ==UserScript==
// @name        Marmelos 55ch
// @namespace   55ch
// @include     http://55ch.org/*
// @version     1.4.0
// @grant       none
// @require     http://code.jquery.com/jquery-latest.min.js
// ==/UserScript==

var words = ['>mcq', 'anime', 'ateu', 'ateia', 'ateísmo', 'ateísta', 'chan', 'cristã', 'cristão', 'cristianismo', 'Dilma', 'ENEM', 'filtro', 'filtros', 'fio', 'foda', 'fode', 'hétero', 'holocausto', 'Lula', 'mara', 'melhor horário', 'minha namorada', 'minha pitanga', 'mulher', 'mulheres', 'namorada', 'negra', 'negro', 'negros', 'Olavo', 'Olavo de Carvalho', 'Orkut', 'perguntem qualquer coisa', 'preto', 'punk', 'rateiem', 'Sakura', 'sentimento', 'Serra', 'sexo', 'sexo anal', 'sexo oral', 'skinhead', 'suicidio', 'trap', 'travesti', 'underage', 'VT', 'peka.cc', 'Hello from Russia', 'T0OOY', 'menes', 'facebook', 'https://fbcdn-sphotos-a-a.akamaihd.net/', 'https://scontent.xx.fbcdn.net/', 'twitter', 'omegle', 'tinychat', 'pequenochat', 'cfml.us', 'akela', 'dogola', 'd-o-g-o-l-a', 'dogol-a', 'dogo-la', 'dog-ola', 'do-gola', 'd-ogola', 'd-ogol-a', 'd-ogo-la', 'd-og-ola', 'd-o-gola', 'd0gola', 'dog0la', 'd0g0la', 'imperador cão', 'fakul', 'comidademacaco+', 'comidademacaco&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;i&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;+&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/i&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;', '6Vb5cND6', 'basinga', 'bazinga', 'bazim', 'basin', 'zimbabwe', 'bozzano', 'bisnaga', 'birulei', 'basimgan', 'basengan', 'basengam', 'bosneta', 'homemdebem', 'homensdebem', 'rainha do b', 'rainha do /b', 'rei do b', 'rei do /b', 'duplos decidem', 'triplos decidem', 'chequem meus duplos', 'chequem meus triplos', 'ajudandoanoespordinheiro', 'epic-rewards', 'epicfreeprizes', '7xp24woty3lxiqrk', 'd\'us', 'virjões', 'virjão', '0816adadf99018d0544f1d036fe45fa1', 'existe algo mais retardado que viajar?', 'vai chora', 'vai chora?', 'Vai chora', 'Vai chora?', 'pthc', 'r@ygold', 'hussyfan', '2ch.hk', 'peka.cc', 'peka', 'miltin', 'miltim', 'plug.dj', 'D3751DC1BA', 'mene', 'magal.li', 'salmaochan.tk/', 'butthurt', 'bananal', 'universidade pública', 'ghost'];

$(document).ready(function() {
    hook_form();
    display_enabled();
});

// Exibe mensagem informando que filtro está habilitado abaixo do nome da board
function display_enabled()
{
    var css = {
        'display': 'block',
        'font-size': '12px',
    }
    var msg = $('<span>Marmelos 1.4.0 habilitado.</span>')
    $('.logo').append(msg);
    msg.css(css);
}

// Hook no submit do form
function hook_form()
{
    var form = $('#postform');

    form.submit(function(e) {
        replace_words();
    });
}

// Substituir palavras
function replace_words()
{
    var new_word,
        length,
        re,
        textarea = $('textarea[name="message"]'),
        text = textarea.val();

    /*
    A escolha de pesquisar por cada instância da palavra, e depois em um
    loop modificar uma por uma ao invés de um simples search and replace
    foi feita pois desta forma conseguimos manter o case das palavras e
    a formatação.
    */
    $.each(words, function(index, value) {
        re = new RegExp(value, 'gi');
        matches = text.match(re, new_word);
        if (matches)
        {
            $.each(matches, function(index, v) {
                length = v.length;
                new_word = v.substring(0, length-1) + '\u200b' + v.substring(length-1, length);
                text = text.replace(v, new_word);
            });
        }
    });
    textarea.val(text);
}
