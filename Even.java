package pgrms;
import java.util.Scanner;

public class Even {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter Number:");
		
		int n = sc.nextInt();
	
		if(n==1)
			System.out.println("1 is EvenPrime");
		else if(n%2==0)
			System.out.println("EVEN");
		else
			System.out.println("Not EVEN");
		
		sc.close();	}

}
