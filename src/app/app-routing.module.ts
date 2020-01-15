import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubtractComponent} from './components/subtract/subtract.component';
import {IsPrimeComponent} from './components/is-prime/is-prime.component';
import {ReverseIntegerComponent} from './components/reverse-integer/reverse-integer.component';
import {IsPalindromeComponent} from './components/is-palindrome/is-palindrome.component';
import {FibonaccisUnderComponent} from './components/fibonaccis-under/fibonaccis-under.component';
import {LargestPrimefactorComponent} from './components/largest-primefactor/largest-primefactor.component';
import {GithubComponent} from './components/github/github.component';
import {AboutMeComponent} from './components/about-me/about-me.component';
import {LoginComponent} from './components/login/login.component';
import {ContactComponent} from './components/contact/contact.component';
import {TictactoeComponent} from './components/tictactoe/tictactoe.component';
import {TictactoeGameComponent} from './components/tictactoe-game/tictactoe-game.component';
import {ThankYouComponent} from './components/thank-you/thank-you.component';
import {ProductsComponent} from './components/products/products.component';
import {OrdersComponent} from './components/orders/orders.component';
import {ClientsComponent} from './components/clients/clients.component';
import {WorldComponent} from './components/world/world.component';
import {FtpDownloadComponent} from './components/ftp-download/ftp-download.component';
import {DijkstraAlgoritmComponent} from './components/dijkstra-algoritm/dijkstra-algoritm.component';

const routes: Routes = [
  {path: 'isPrime', component: IsPrimeComponent},
  {path: 'subtract', component: SubtractComponent},
  {path: 'reverseInteger', component: ReverseIntegerComponent},
  {path: 'isPalindrome', component: IsPalindromeComponent},
  {path: 'fibonaccisUnder', component: FibonaccisUnderComponent},
  {path: 'github', component: GithubComponent},
  {path: 'aboutMe', component: AboutMeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'largestPrimefactor', component: LargestPrimefactorComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'tictactoeGame', component: TictactoeGameComponent},
  {path: 'tictactoe', component: TictactoeComponent},
  {path: 'thankYou', component: ThankYouComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'world', component: WorldComponent},
  {path: 'ftpDownload', component: FtpDownloadComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'dijkstra', component: DijkstraAlgoritmComponent},
  {path: '**', redirectTo: '/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
