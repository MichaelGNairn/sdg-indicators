---
# Do not delete this line.
---
{% include custom/cookies.js %}

opensdg.dataRounding = function(value) {
  if (value == null) {
    return value
  }
  else {
    return Number(value.toPrecision(3))
  }
};

if ( $('.variable-selector').attr('data-field') == 'Series' ) {
  $('.variable-selector').trigger( "click" );
}
