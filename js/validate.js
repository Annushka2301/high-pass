
new JustValidate('.about__form', {
  rules: {
    email: {
      required: true,
      minLength: 6
    },
  },
  messages: {
    email: 'Недопустимый формат',
  },
});

new window.JustValidate('.cont__form', {
  rules: {
    name: {
      required: true,
      minLength: 3
    },
    email: {
      required: true,
      minLength: 6
    },
  },
  tooltip: {
    selectorWrap: '.tooltip-wrapper' // default value - just-validate-tooltip-container
    },
  messages: {
    name: 'Недопустимый формат',
    email: 'Недопустимый формат',
  },
});
