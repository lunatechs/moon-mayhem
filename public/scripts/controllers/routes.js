'use strict';

page('/', moonController.loadAll, moonController.index);
page('/about', aboutController.index);
page('/resources', resourcesController.index);

page();