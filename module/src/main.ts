import {SemVer} from 'semver';

const ver = '1.0.0';

const newVersion = (new SemVer(ver)).inc( 'patch');

console.log(newVersion);