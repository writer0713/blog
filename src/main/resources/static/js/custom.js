
// CodeMirror 적용
$('.__se_code_view').each(function() {

    const $this = $(this);
    const $code = $this.text();

    $this.empty();

    const myCodeMirror = CodeMirror(this, {
        value: $code,
        mode: 'text/x-java',
        theme: 'material',
        lineNumbers: true,
        lineWrapping: true,
        scrollbarStyle: null,
        enableCodeFormatting: true,
        readOnly: true,
        viewportMargin: Infinity
    });

});