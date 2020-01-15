import {BrowserModule} from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HiddenFieldsComponent} from './components/main/hidden-fields/hidden-fields.component';
import {ResponseComponent} from './components/main/response/response.component';
import {UpperRowComponent} from './components/main/upper-row/upper-row.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {AboutMeComponent} from './components/about-me/about-me.component';
import {AstaralgorithmComponent} from './components/astaralgorithm/astaralgorithm.component';
import {ContactComponent} from './components/contact/contact.component';
import {FibonaccisUnderComponent} from './components/fibonaccis-under/fibonaccis-under.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SubtractComponent} from './components/subtract/subtract.component';
import {IsPrimeComponent} from './components/is-prime/is-prime.component';
import {ReverseIntegerComponent} from './components/reverse-integer/reverse-integer.component';
import {IsPalindromeComponent} from './components/is-palindrome/is-palindrome.component';
import {LargestPrimefactorComponent} from './components/largest-primefactor/largest-primefactor.component';
import {GithubComponent} from './components/github/github.component';
import {LoginComponent} from './components/login/login.component';
import {TictactoeComponent} from './components/tictactoe/tictactoe.component';
import {HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {TictactoeGameComponent} from './components/tictactoe-game/tictactoe-game.component';
import {ThankYouComponent} from './components/thank-you/thank-you.component';
import {ProductsComponent} from './components/products/products.component';
import {ClientsComponent} from './components/clients/clients.component';
import {OrdersComponent} from './components/orders/orders.component';
import {WorldComponent} from './components/world/world.component';
import {FtpDownloadComponent} from './components/ftp-download/ftp-download.component';
import {HomeComponent} from './components/home/home.component';
import {NgxPopper} from 'angular-popper';
import {DijkstraComponent} from './components/dijkstra/dijkstra.component';
import { DijkstraAlgoritmComponent } from './components/dijkstra-algoritm/dijkstra-algoritm.component';
import {ConstantsService} from './common/services/constants.service';



@NgModule({
  declarations: [
    AppComponent,
    HiddenFieldsComponent,
    ResponseComponent,
    UpperRowComponent,
    NavbarComponent,
    FooterComponent,
    AboutMeComponent,
    AstaralgorithmComponent,
    ContactComponent,
    FibonaccisUnderComponent,
    SubtractComponent,
    IsPrimeComponent,
    ReverseIntegerComponent,
    IsPalindromeComponent,
    LargestPrimefactorComponent,
    GithubComponent,
    LoginComponent,
    TictactoeComponent,
    TictactoeGameComponent,
    ThankYouComponent,
    ProductsComponent,
    ClientsComponent,
    OrdersComponent,
    WorldComponent,
    FtpDownloadComponent,
    HomeComponent,
    DijkstraComponent,
    DijkstraAlgoritmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPopper
  ],
  providers: [ConstantsService],
  bootstrap: [AppComponent],
})
export class AppModule {
}

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}
