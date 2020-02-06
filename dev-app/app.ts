import { PLATFORM } from 'aurelia-pal';
import { bindable, autoinject } from 'aurelia-framework';
import { Router, RouterConfiguration, RouteConfig } from 'aurelia-router';
import { Sidebar } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
import { TreeView, TreeViewModel, NodeSelectEventArgs } from '@syncfusion/ej2-navigations';
enableRipple(true);

import * as data from './dataSource.json';


type RouteDescriptor = { [key: string]: Object };

function hasChildren(node) {
  return (typeof node === 'object')
      && (typeof node.children !== 'undefined')
      && (node.children.length > 0);
}

function flatten (routes: RouteDescriptor[], output: RouteDescriptor[]) {

  routes.forEach(route => {
    output.push(route);
    if (hasChildren(route)){
      return flatten(<Array<RouteDescriptor>>route.children, output);
    }
  });
  return [...output];
}

@autoinject
export class App {

  private routes: RouteDescriptor[] = [
    {
      route: 'getting-started', name: 'getting-started', title: 'Getting Started', moduleId: PLATFORM.moduleName('./getting-started'), iconCss: 'icon-microchip icon', nav: true
    },
    {
      route: 'components', name: 'components', title: 'Components', moduleId: PLATFORM.moduleName('./components'), iconCss: 'icon-microchip icon', nav: false,
      children: [
          { route: 'button-getting-started', name: 'button-getting-started', title: 'Buttons', moduleId: PLATFORM.moduleName('./components/button/button-getting-started'), iconCss: 'icon-microchip icon', nav: true}
        , { route: 'button-types-and-styles', name: 'button-types-and-styles', title: 'Buttons Types and Styles', moduleId: PLATFORM.moduleName('./components/button/button-types-and-styles'), iconCss: 'icon-microchip icon', nav: true}
        //   {
        //      route: 'editors', name: 'components-editors', title: 'Editors', moduleId: PLATFORM.moduleName('./components/editors'), iconCss: 'icon-microchip icon', nav: false,
        //      children: [
        //        { route: 'buttons', name: 'components-editors-buttons', title: 'Buttons', moduleId: PLATFORM.moduleName('./components/editors/buttons/default'), iconCss: 'icon-microchip icon', nav: true}
        //      ]
        //   },
        //   {
        //     route: 'dropdowns', name: 'components-dropdowns', title: 'DropDowns', moduleId: PLATFORM.moduleName('./components/dropdowns'), iconCss: 'icon-microchip icon', nav: false,
        //     children: [
        //       { route: 'auto-complete', name: 'components-dropdowns-auto-complete', title: 'AutoComplete', moduleId: PLATFORM.moduleName('./components/dropdowns/auto-complete/default'), iconCss: 'icon-microchip icon', nav: true}
        //     ]
        //  }
        ]
    }
  ];

  constructor(private router: Router) {}


  configureRouter(config: RouterConfiguration, router: Router): void {

    this.router = router;
    config.title = 'Aurelia Syncfusion Bridge';
    let tmp: RouteDescriptor[] = [];

    config.map([ { route: '', redirect: 'getting-started' },
                  ...<RouteConfig[]>flatten(this.routes, [])] );

    //config.mapUnknownRoutes('getting-started');
  }

  attached() {
    let sidebarMenu: Sidebar = new Sidebar({
      width: '290px',
      target: '.main-content',
      mediaQuery: '(min-width: 600px)',
    });
    sidebarMenu.appendTo('#sidebar-treeview');

    // Toggle the Sidebar
    document.getElementById('hamburger').onclick = (): void => {
        sidebarMenu.toggle();
    };

    // TreeView  initialization

    let mainTreeView: TreeView = new TreeView({
        fields: { dataSource: this.routes, id: 'route', text: 'title', child: 'children' },
        expandOn: 'Click',
        nodeSelected: (eargs: NodeSelectEventArgs) => {

          if (this.router.routes.find(route => route.route === eargs.nodeData.id).nav) {
            this.router.navigate(eargs.nodeData.id.toString());
          }

        }
    });

    mainTreeView.appendTo('#main-treeview');
  }
}

