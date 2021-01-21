import isNotEmpty from "../helpers/isNotEmpty";
import isNotNull from "../helpers/isNotNull";
import isNotUndefined from "../helpers/isNotUndefined";

export default function(value:any) {
    return true === (isNotNull(value) && isNotUndefined(value) && isNotEmpty(value));
}