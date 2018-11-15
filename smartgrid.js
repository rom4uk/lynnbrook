const smartgrid = require('smart-grid');

const settings = {
    columns: 12,
    offset: '30px',
    container: {
        maxWidth: '1170px',
        fields: '15px'
    },
    breakPoints: {
        md: {
            width: "992px",
            fields: "15px"
        },
        sm: {
            width: "720px",
            fields: "10px"
        },
        xs: {
            width: "576px",
            fields: "5px"
        }
    },
    oldSizeStyle: false
};

smartgrid('./dev/less', settings);