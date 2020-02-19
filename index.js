let email = /([a-z,0-9]){1,15}@[a-z]{2,20}\.[a-z]{1,4}/
let regularo4ka = /^[0-9][ghtx]?\.$/
let url = /\/[a-z]/
let strForUrl1 = '/product/20';
let strForUrl2 = '/person/10/device/90';
regularo4ka.test('2g.')
email.test('vasiapupkin@gmail.com')
console.log(strForUrl1.replace(/^(\/[a-z]*\/)/, ""));
console.log(strForUrl2.replace(/^(\/[a-z]*\/(\d+)\/[a-z]*\/(\d+))/, "$2,$3"));
