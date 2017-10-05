const content = require('../api/content.json');

let api = {
  getContent(language = 'eng') {
    return content.filter(obj => obj.lang === language)[0];
  }
};

const initialState = {
  content: api.getContent()
};

//reducer
export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SWITCH_LANGUAGE':
      return {
        content: api.getContent(action.language)
      };
    default:
      return state;
  }
};
