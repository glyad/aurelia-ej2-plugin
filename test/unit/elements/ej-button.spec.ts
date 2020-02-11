import { EjButtonModel } from './../../../src/elements/buttons/button/ej-button-model';
import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import { ButtonModel } from '@syncfusion/ej2-buttons';


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

describe('ej-button element', () => {
  let component;

  afterEach(() => {
    if (component) {
      component.dispose();
      component = null;
    }
  });

  it('binds the Content property', done => {

    component = StageComponent
      .withResources('resources/elements/buttons/button/ej-button')
      .inView('<ej-button content.bind="content"></ej-button>')
      .boundTo(model);

    component.create(bootstrap).then(() => {
      const view = component.element;
      expect(view.textContent.trim()).toBe(model.content);
      done();
    }).catch(e => {
      fail(e);
      done();
    });
  });

  it('displays the Content property statically', done => {

    //console.log(`displays the Content property "${model.content}" statically`)
    component = StageComponent
      .withResources('resources/elements/buttons/button/ej-button')
      .inView(`<ej-button content="${model.content}"></ej-button>`);

    component.create(bootstrap).then(() => {
      const view = component.element;
      expect(view.textContent.trim()).toBe(`${model.content}`);
      done();
    }).catch(e => {
      fail(e);
      done();
    });
  });
});
