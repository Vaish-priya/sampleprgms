package pgrms;
import java.util.Scanner;
public class Palindrome {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String original, reverse = ""; // Objects of String class  
	      Scanner sc = new Scanner(System.in);   
	      System.out.println("Enter a string/number to check if it is a palindrome");  
	      original = sc.nextLine();   
	      sc.close();
	      int length = original.length();   
	      for ( int i = length - 1; i >= 0; i-- )  
	         reverse = reverse + original.charAt(i);  
	      if (original.equals(reverse))  
	         System.out.println("Is a palindrome.");  
	      else  
	         System.out.println("Isn't a palindrome.");   
	}

}
