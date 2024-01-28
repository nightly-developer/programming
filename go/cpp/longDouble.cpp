#include<iostream>
using namespace std;
long double factorial(int number){
long double fact = 1;
for (long   i=1;i<=number;i++){
	fact = fact * i;
	}
return fact;
}

int main(){
int number;
cin>>number;
cout<<factorial(number)<<endl;
}
