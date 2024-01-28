import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.Scanner;

//inputs 1)principal 2) Annual Interest Rate: 3) Period in years:
//output Mortgage in $:

//imports


@SuppressWarnings("non-project")

class MortgageCalculator{
  public static void main(String[] args) {
    //creating scanner to read input
    Scanner scanner = new Scanner(System.in);
    
    //taking principal input
    int principal;
    while(true){
      System.out.print("Principal: ");
      principal = scanner.nextInt();
      if (1_000 < principal && principal <= 1_000_000) 
        break;
      System.out.println("Enter between $1,000 and $1,000,000");
      }

    //taking annual Interest Rate
    float interest;
    while(true){
      System.out.print("Annual Intrest Rate: ");
      interest = scanner.nextInt();
      if (0 < interest && interest <= 30 ) 
        break;
      System.out.println("intrest should be greater than 0 and less than 30.");
    }
    
    //taking Period inyears
    byte period;
    while(true){
      System.out.print("Period in years:");
      period = scanner.nextByte();
      if (1<period && period <= 30) 
        break;
      System.out.println("period should be greater than 1 year and less than 30 years");
    }

    //calculating Mortgage
    double monthlyInterest = interest/(12*100);
    int totalPayments = (int) (period * 12);
    double commonTerm = (double)(Math.pow((1+monthlyInterest) , totalPayments));
    double numerator = monthlyInterest * commonTerm;
    double dinominator = commonTerm - 1;
    double multiplyTerm = numerator / dinominator;
    float mortgage = (float) Math.round((principal * multiplyTerm)*100)/100;

    //representing mortgage in $
    NumberFormat currencey = NumberFormat.getCurrencyInstance();
    String mortgageStr = currencey.format(mortgage);

    //mortgage calculator 
    //limit Principal value ($1K - $1M)
    //0 < annual intrest < 30
    // 1 < Years <= 30 


    //output
    System.out.println(mortgageStr);
  }
}