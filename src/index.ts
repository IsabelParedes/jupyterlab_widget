import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the my_widget extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'my_widget:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension my_widget is activated!');
  }
};

export default plugin;
