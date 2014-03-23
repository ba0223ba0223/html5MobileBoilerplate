Ext.define('ForumVision.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'ForumVision'
                },

                html: [
                    "Welcome. This ist a stub of an app for running a forum game about youtube music videos. ",
                    "It is developed as a homework for the iVersity MOOC Web Engineering II. ",
                    "At the moment there's not much here. 'Video' contains the video from an earlier homework and 'My' contains a basic user registration form with no functionality. ",
                    "This view contains HTML."
                ].join("")
            },
            {
                title: 'Video',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Video'
                    },
                    {
                        xtype: 'video',
                        url: 'http://broilerplatte.cloudcontrolled.com/data/TobyThePup-DownSouthhdQuality.ogv',
                        posterUrl: 'http://broilerplatte.cloudcontrolled.com/data/TobyThePup-DownSouthhdQuality.gif'
                    }
                ]
            },
            {
                title: 'My',
                iconCls: 'user',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'My'
                    },
                    {
                        xtype: 'fieldset',
                        id: 'userform',
                        title: 'Personal Info',
                        items: [
                         {
                          xtype: 'textfield',
                          name : 'name',
                          label: 'Name',
                          required: true,
                          clearIcon: true
                         },
                         {
                          xtype: 'emailfield',
                          name : 'email',
                          label: 'eMail',
                          required: true,
                          clearIcon: true
                         },
                         {
                          xtype: 'passwordfield',
                          name : 'password',
                          label: 'Password',
                          required: true,
                          clearIcon: true
                         },
                         {
                          xtype: 'button',
                          text: 'Register'
                         }                                                                      
                        ]
                    }
                ]
            }
        ]
    }
});
