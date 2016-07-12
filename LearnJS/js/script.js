var primes[10] = {true};

for(var factor= 2; factor*factor <= 10; ++factor)
{
  for (var i = 4; i <=10; i++) {
    if (i % factor == 0) {
      primes[i] = false;
  }
}

for(var i = 0; i < 10; ++i)
{
  if(primes[i])
    console.log(i);
}
