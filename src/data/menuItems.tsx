import { MenuItem } from '../interfaces/appInterfaces';




export const menuItems: MenuItem[] = [
    {
        'name': 'Animation101',
        'icon': 'star-outline',
        'component': 'Animation101Screen',
    },
    {
        'name': 'Animation102',
        'icon': 'cube-outline',
        'component': 'Animation102Screen',

    },
    {
        'name': 'Switch',
        'icon': 'toggle-outline',
        'component': 'SwitchScreen',

    },
    {
        'name': 'Alert',
        'icon': 'alert-circle-outline',
        'component': 'AlertScreen',

    },
    {
        'name': 'Text Input',
        'icon': 'bookmark-outline',
        'component': 'TextInputScreen',

    },
    {
        'name': 'Pull to Refresh',
        'icon': 'refresh-outline',
        'component': 'RefreshScreen',

    },
    {
        'name': 'Modal',
        'icon': 'albums-outline',
        'component': 'ModalScreen',

    },
    {
        'name': 'Slides',
        'icon': 'caret-back-circle-outline',
        'component': 'SlidesScreen',

    },
    {
        'name': 'Change Theme',
        'icon': 'flask-outline',
        'component': 'ChangeThemeScreen',

    }
];