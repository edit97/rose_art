import {_hostMedia} from "../redux/api";
import {defaultLogo} from "../assets/imeges";



export function generateMemberMediaUrl(path) {
    if (path?.startsWith('http')) {
        return path;
    }
    return path ? `${_hostMedia}/images${path}` : defaultLogo;
}

export function generateAdminMediaUrl(path) {
    if (path?.startsWith('http')){
        return path;
    }
    return path ? `${_hostMedia}/files${path}` : defaultLogo;
}