(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{338:function(e,t,n){e.exports=n.p+"assets/img/wings_configuration_example.0c6a151e.png"},414:function(e,t,n){"use strict";n.r(t);var s=n(46),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"migrating-to-wings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#migrating-to-wings"}},[e._v("#")]),e._v(" Migrating to Wings")]),e._v(" "),s("p",[e._v("This guide is for people looking to migrate from the old Node.JS daemon to Wings. Please see the\n"),s("RouterLink",{attrs:{to:"/wings/1.0/installing.html"}},[e._v("install guide")]),e._v(" if you are trying to install Wings for the first time on\na new node.")],1),e._v(" "),s("p",[e._v("You'll have a brief offline period as you perform this process, however no running game processes\nwill be affected. Plus, chances are your Panel will be offline (or in maintenance mode) during this\nso your users should not notice anything out of the ordinary.")]),e._v(" "),s("h2",{attrs:{id:"install-wings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-wings"}},[e._v("#")]),e._v(" Install Wings")]),e._v(" "),s("p",[e._v("The first step for installing the daemon is to make sure we have the required directory structure setup. To do so,\nrun the commands below which will create the base directory and download the wings executable.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p /etc/pterodactyl\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -L -o /usr/local/bin/wings https://github.com/pterodactyl/wings/releases/download/v1.0.0-rc.2/wings_linux_amd64\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" u+x /usr/local/bin/wings\n")])])]),s("h2",{attrs:{id:"copy-new-configuration-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copy-new-configuration-file"}},[e._v("#")]),e._v(" Copy New Configuration File")]),e._v(" "),s("p",[e._v("Once you have installed Wings, you'll need to copy over a new configuration file from the Panel. This file\nis in a new format, and should be easier for you to manage and edit in the future.")]),e._v(" "),s("p",[e._v("Simply copy and paste the code block and paste it into a file called "),s("code",[e._v("config.yml")]),e._v(" within the "),s("code",[e._v("/etc/pterodactyl")]),e._v("\ndirectory and save it.")]),e._v(" "),s("p",[s("img",{attrs:{src:n(338),alt:""}})]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("Please note that any modifications you previously made to the configuration will be lost with this. If you have\nmodifications to our default settings, the best option is to start Wings once with the copied configuration which\nwill then populate all of the other configuration settings.")]),e._v(" "),s("p",[e._v("From there you can make any adjustments as necessary.")])]),e._v(" "),s("h2",{attrs:{id:"remove-old-daemon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove-old-daemon"}},[e._v("#")]),e._v(" Remove Old Daemon")]),e._v(" "),s("p",[e._v("Now that Wings is installed, we need to remove all of the old daemon code from the server since it is not being\nused anymore. To do this, simply execute the following commands — assuming your old daemon is in the default\n"),s("code",[e._v("/srv/daemon")]),e._v(" directory.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Stop the old daemon.")]),e._v("\nsystemctl stop wings\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Delete the entire directory. There is nothing stored in here that we actually need for the")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# purposes of this migration. Remeber, server data is stored in /srv/daemon-data.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf /srv/daemon\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Optionally, remove NodeJS from your system if it was not used for anything else.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" -y remove nodejs "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or: yum remove nodejs")]),e._v("\n")])])]),s("h2",{attrs:{id:"daemonize-wings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#daemonize-wings"}},[e._v("#")]),e._v(" Daemonize Wings")]),e._v(" "),s("p",[e._v("You'll then need to edit your existing "),s("code",[e._v("systemd")]),e._v(" service file for Wings to point to the new control software. To do\nthis, open "),s("code",[e._v("/etc/systemd/system/wings.service")]),e._v(" and replace the entire contents of the file with the following:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[Unit]\nDescription=Pterodactyl Wings Daemon\nAfter=docker.service\n\n[Service]\nUser=root\nWorkingDirectory=/etc/pterodactyl\nLimitNOFILE=4096\nPIDFile=/var/run/wings/daemon.pid\nExecStart=/usr/local/bin/wings\nRestart=on-failure\nStartLimitInterval=600\n\n[Install]\nWantedBy=multi-user.target\n")])])]),s("p",[e._v("Then, start wings.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("systemctl daemon-reload\nsystemctl enable --now wings\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("What if Wings doesn't start?")]),e._v(" "),s("p",[e._v("If you encounter issues starting Wings at this point, run the following commands to start Wings directly and check\nfor any specific error output.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo wings --debug\n")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);