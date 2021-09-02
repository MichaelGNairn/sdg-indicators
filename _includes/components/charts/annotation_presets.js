opensdg.annotationPresets = {
    common: {
        // This "common" preset is applied to all annotations automatically.
        borderColor: '#949494',
        type: 'line',
        borderDash: [15, 10],
        borderWidth: 1,
        label: {
            backgroundColor: 'white',
            fontColor: 'black',
        },
        // This "highContrast" overrides colors when in high-contrast mode.
        highContrast: {
            label: {
                backgroundColor: 'black',
                fontColor: 'white'
            }
        },
        // This callback is used to generate a generic description for screenreaders.
        // This can be overridden to be a more specific string, eg:
        //
        //     description: 'Chart annotation showing a 2030 target of 15%'
        //
        description: function() {
            var descriptionParts = [translations.indicator.chart_annotation];
            if (this.label && this.label.content) {
                descriptionParts.push(translations.t(this.label.content));
            }
            else {
                // If there is no label, just specify whether it is a box or line.
                if (this.type == 'line') {
                    descriptionParts.push(this.mode + ' line');
                }
                if (this.type == 'box') {
                    descriptionParts.push('box');
                }
            }
            if (typeof this.value !== 'undefined') {
                descriptionParts.push(this.value);
            }
            return descriptionParts.join(': ');
        },
    },
    target_line: {
        mode: 'horizontal',
        label: {
            position: 'right',
            content: translations.indicator.annotation_2030_target,
        },
    },
    series_break: {
        mode: 'vertical',
        borderColor: '#757575',
        borderDash: [2, 2],
        label: {
            position: 'top',
            content: translations.indicator.annotation_series_break,
        },
    },
};
