import java.text.NumberFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.Scanner;

@SuppressWarnings({ "non-project", "unused" })

public class Main {
    public static void main(String args[]) {
        //primitive types
        byte age = 80;
        //java Defaults are int and double 
        double e = 2.7182818284590453;
        //use l/L to explicitly define long type
        long phone = 92_67_45_61_78L;
        //use f/F to explicitly define float type
        float price = 65.32F;
        //char
        char grade = 'A';
        //boolean
        boolean minor = false;

        //Reference types
        //importng Date
        Date today = new Date();
        //String are immutable
        String userName = "nightlyCodder";
        //Array
        int[] numbers = new int[5];
        numbers[0] = 5;
        numbers[3] = 3;
        //using Array class to convert to sring
        String numbersStr = Arrays.toString(numbers);
        //defining Array simple way
        char[] letters = { 'a', 'b', 'c', 'x', 'y' };
        //multidimentional array
        int[][] table = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };
        String decimalStr = Arrays.deepToString(table);
        
        //Arithmatic Expression
        double div = (double)10 / (double) 3;
        
        byte smaller = 2;//implisit
        short small = (short) (smaller + 1);//on the edge
        byte loss = (byte) (small);//explicit
        
        //Math.random
        int result = (int)((Math.random() * 100));
        
        //Formatting Numbers
        NumberFormat currency = NumberFormat.getCurrencyInstance();
        String currencyStr = currency.format(12344.3243);
        
        //REading input
        Scanner scanner = new Scanner(System.in);//reading from terminal
        //System.out.print("Marks: ");
        //byte marks = scanner.next();
        //System.out.println("your got: "+marks);

        //if statement
        int temp = 33;
        if (temp > 30) {//code block
            System.out.println("its a hot day");
        } //format code to be inline
        else if (temp >20) 
            System.out.println("it is Beautiful day");
        else 
            System.out.println("its a cold day");

        //Note: `{ }` require for declairing variable inside if statement 
        //Simplifying If satement
        int income = 12000;
        // instead of `boolean hasHigherIncome = true;` use 
        boolean hasHigherIncome = income > 10000;

        //ternary Operator
        String status = 
        (hasHigherIncome)
        ?("rich")
        :("poor");

        //switch statement
        String order = "pizza";
        switch (order) {
            case "pizza":
                System.out.println("I love pizza");
                break;
            case "burger":
                System.out.println("if patty of burger is not made up of beef its a sandwich");
                break;
            default:
                System.out.println("try shawarma");
        }
        
        //for loop
        for (int i = 0; i < 5; i++) {
            System.out.printf("this is statement %d \n", i);
        }
        
        //while loop
        //break continue
        String input = "";
        while (true) { //loop until user types quit
            System.out.print("Input: ");
            input = scanner.next().toLowerCase();
            if (input.equals("pass"))
                continue;
            if (input.equals("quit"))
                break;
            System.out.println(input);
        }
        
        //for-each loop
        //cannot itorate backwords
        //can not access index of element
        String[] fruits = { "apple", "mango", "banana" };
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}
