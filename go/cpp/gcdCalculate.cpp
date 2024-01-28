#include<iostream>
using namespace std;
int corsera(int num1,int num2){
	if (num1<num2)
		swap(num1,num2);
	return((num2==0)?num1:(num2==1)?1:((num1%num2==0)?num2:corsera(num2,num1%num2)));
}
	
int main(){
	int num1 = 3918848;
	int num2 = 1653264;
	cout<<"gcd of given numbers is: "<<corsera(num1,num2)<<endl;
}
