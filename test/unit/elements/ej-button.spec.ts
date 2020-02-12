import { EjButtonModel } from './../../../src/elements/buttons/button/ej-button-model';
import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import { ButtonModel } from '@syncfusion/ej2-buttons';
import { stringify } from 'querystring';


let model = {
  content: 'test',
  cssClass: '',
  enabled: true,
  enableRtl: false,
  iconCss: '',
  iconPosition: null, //"Left" | "Right" | "Top" | "Bottom"
  primary: false,
  toggle: false,
};

function toKebabCase(str: string) {
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');
}

function buildBindingsString(model: {}) {
  let result: string = '';

  Object.keys(model).forEach(key => {
    result += ` ${toKebabCase(key)}.bind="${key}" `;
  });

  return result;
}

describe('ej-button element', () => {
  let component;

  afterEach(() => {
    if (component) {
      component.dispose();
      component = null;
    }
  });

  Object.keys(model).forEach(key => {
    console.log(`${key} = ${model[key]}`);

    it(`binds the ${key} property`, done => {


      component = StageComponent
        .withResources('resources/elements/buttons/button/ej-button')
        .inView(`<ej-button ${toKebabCase(key)}.bind="${key}"></ej-button>`)
        .boundTo(model);

      component.create(bootstrap).then(() => {
        const view = component.element;
        expect((<HTMLElement>view).attributes.getNamedItem(`${toKebabCase(key)}.bind`).value).toBe(key);
        done();
      }).catch(e => {
        fail(e);
        done();
      });
    });
  });

  // it('binds the Content property', done => {

  //   component = StageComponent
  //     .withResources('resources/elements/buttons/button/ej-button')
  //     .inView('<ej-button content.bind="content"></ej-button>')
  //     .boundTo(model);

  //   component.create(bootstrap).then(() => {
  //     const view = component.element;
  //     console.log((<HTMLElement>view));
  //     expect(view.textContent.trim()).toBe(model.content);
  //     done();
  //   }).catch(e => {
  //     fail(e);
  //     done();
  //   });
  // });

//   it('displays the Content property statically', done => {

//     console.log(`displays the Content property "${model.content}" statically`)
//     component = StageComponent
//       .withResources('resources/elements/buttons/button/ej-button')
//       .inView(`<ej-button content="${model.content}"></ej-button>`);

//     component.create(bootstrap).then(() => {
//       const view = component.element;
//       expect(view.textContent.trim()).toBe(`${model.content}`);
//       done();
//     }).catch(e => {
//       fail(e);
//       done();
//     });
//   });
});
