function add(x,y) {
var a=(x.split('')).reverse();
var b=(y.split('')).reverse();
var max=Math.max(a.length,b.length)
var z=[];
var flag=0;
for(var c=0,l=max;c<l;c++){
	var d=(+a[c]||0)+(+b[c]||0)+flag;
	flag=0;
	if(d>9&&c!==l-1){
		d=d-10;
		flag=flag+1
	}
	z.push(d)
}
  return z.reverse().join("")
}

module.exports = add