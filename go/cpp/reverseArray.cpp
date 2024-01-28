#include<iostream>
using namespace std;
void reverseArray(int arr[], int arr_size){
	int reversedArr[arr_size];
	for (int index=0;index<arr_size;index++)
		reversedArr[index] = arr[arr_size-1-index];
}
int main(){
	int arr[] = {2,3,4,5,0};
	int arr_size = sizeof(arr)/sizeof(arr[0]);
	reverseArray(arr,arr_size);
	return 0;
}