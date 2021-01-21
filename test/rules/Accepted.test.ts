import {accepted} from '../../src/rules/accepted';

test('should return true if "on", 1, "1", "yes", "true", or true,', () => {
    expect(accepted(true)).toBeTruthy();
    expect(accepted('on')).toBeTruthy();
    expect(accepted(1)).toBeTruthy();
    expect(accepted('1')).toBeTruthy();
    expect(accepted('yes')).toBeTruthy();
    expect(accepted('true')).toBeTruthy();
})

test('should return false if "off", 0, "0", "no", "false", or false,', () => {
    expect(accepted(false)).toBeFalsy();
    expect(accepted('off')).toBeFalsy();
    expect(accepted(0)).toBeFalsy();
    expect(accepted('0')).toBeFalsy();
    expect(accepted('no')).toBeFalsy();
    expect(accepted('false')).toBeFalsy();
})