var PI = Math.PI;

exports.area = function (r)
{
  return PI * r * r;
};

exports.circum = function (r)
{
  return 2 * PI * r;
};

exports.add = function(x,y)
{
  return x+y;
};

exports.mul = function(v,c)
{

  return v*c;

};

exports.con =function(str,str1)
{
  return str+str1;

}
