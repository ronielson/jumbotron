import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

    }

    // declare all names here, they will be iterated in the HTML
    names = ['Evelyn', 'Alfred', 'Richard', 'Misis', 'Rina', 'Others'];

    payments = []; // will be provided by user
    product = null; // will also be provided by user

    submitForm() { // called when submit button is pressed

        // convert strings to numbers (floats), and nulls to zerp
        for (var i = 0; i < this.names.length; i++) {
            if(this.payments[i] == null) {
                this.payments[i] = 0;
            }
            else {
                this.payments[i] = parseFloat(this.payments[i]);
            }
        }

        // display results in console log
        console.log('payments', this.payments);
        console.log('product', this.product);

        // find highest number and add 300
        let result = Math.max.apply(null, this.payments) + 300;

        // display your result in an alert
        let alert = this.alertCtrl.create({
            title: 'Computation complete!'!,
            subTitle: 'The number you\'re looking for is ' + result,
            buttons: ['Ok, cool.']
        });
        alert.present();

    }


}
