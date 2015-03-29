dev-service-host
============

[![Build Status](https://travis-ci.org/markfinger/dev-service-host.svg?branch=master)](https://travis-ci.org/markfinger/dev-service-host)

A development-oriented wrapper around [service-host](https://github.com/markfinger/service-host).

Provides:
- A dashboard - accessible by pointing your browser at the host
- Services for controlling/introspecting a running host:
  - `__clear_cache` - Host cache clearing
  - `__hot_load` - Hot-loading of services
  - `__shutdown` - Start the shut down of a running host. If 
    you want a guarantee that the host has completed the 
    shutdown, call `bin/stop.js`
  - `__status` - Host status (config, services available, etc)
- Host start/stop scripts, with support for controlling a host
  running in a detached process


Installation
------------

```
npm install dev-service-host
```


CLI usage
---------

```bash
# Start a dev host in a detached process
node bin/start.js  # exits once the host is listening

# Start a dev host in a blocking process
node bin/start.js --blocking  # exits once the host has stopped

# Stop a running dev host
node bin/stop.js  # exits once the host has stopped
```

All commands accept an optional `--config` option which allows
you to configure/target a host.

If your host is running at an address/port other than the defaults,
make sure that you pass that config into `bin/stop.js` so that it
knows where to find the host.


Programmatic usage
------------------

```javascript
var DevHost = require('dev-service-host');

var host = new DevHost();

host.listen();

// see service-host for more usage examples
```


Configuring the host
--------------------

In addition to the normal config, dev hosts support

```javascript
{
  // An optional number indicating that the host should shut
  // down after a period of inactivity. Inactivity is measured
  // as the time since the last request. The value should be
  // measured in milliseconds. This option is only activated
  // if the host starts listening.
  inactivityShutdownDelay: null
}
```


