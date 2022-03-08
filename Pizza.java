package pgrms;
import java.util.Scanner;

public class Pizza {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
			int money = 200;
			Scanner sc = new Scanner(System.in);
			
			System.out.println("Enter PIZZA price:");
			int pizza = sc.nextInt();
			if(money>= pizza) 
				System.out.println("PIZZA TIME");
				
			else
				System.out.println("I MISSED THE PART WHERE THATS MY PROBLEM");
			
			sc.close();
			
			String str1 ="PIZZA";
			String str2 ="cheese";
			
			System.out.println(str1.toLowerCase());
			System.out.println(str2.toUpperCase());
		


	}

}
