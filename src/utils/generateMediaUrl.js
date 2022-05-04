import {_hostMedia} from "../redux/api";
import {Rosers} from "../assets/imeges";
// import defaultLogo from '../assets/images/';

export function generateMemberMediaUrl(path) {
    if (path?.startsWith('http')) {
        return path;
    }
    return path ? `${_hostMedia}/images${path}` : Rosers;
}

export function generateAdminMediaUrl(path) {
    if (path?.startsWith('http')){
        return path;
    }
    return path ? `${_hostMedia}/files${path}` : Rosers;
}