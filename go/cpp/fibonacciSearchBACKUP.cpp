#include<iostream>
using namespace std;
int fibonacci_search(int arr[], int x, int arr_size, int a=0, int b=1){
	if (a+b < arr_size){
		int fib = a+b;
		if (arr[a] == x){
			return a;
		}
		else if (arr[fib] == x){
			return a+b;
		}
		else if (arr[fib] < x){
			return fibonacci_search(arr,x,arr_size,fib,b);
		}
	}
	return -1;
}

int main(){
int arr [] = {2,4,5,6,8,9,12,13,15,16,18,22,36,45,49,57,58,59,60,67,75,79,83,88,91,94,99};
int arr_size = sizeof(arr)/sizeof(arr[0]);
int x;
cin>>x;
int index = fibonacci_search(arr,x,arr_size);
(index>=0)
? cout<<"Element is present is an Array at index: "<<index<<endl
: cout<<"Element is not present in an Array"<<endl;
}
