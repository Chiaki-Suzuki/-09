<template>
  <section class="reserve_form">
    <img src="././img/niku.jpg" alt="">
    <div class="container">
        <h2>ご予約フォーム</h2>
        <form>
            <table>
                <tr>
                    <th>お名前</th>
                    <td>
                        <input type="text" class="half" v-model.lazy="name" v-on:change="nameCheck">
                        <p class="err" v-if="nameErr">記号・数字の使用は不可です。</p>
                    </td>
                </tr>
                <tr>
                    <th>お電話番号</th>
                    <td>
                        <input type="tel" class="half" v-model.lazy="tel" v-on:change="telCheck">
                        <p>※ハイフン不要</p>
                        <p class="err" v-if="telErr">半角数字のみで入力してください。</p>
                    </td>
                </tr>
                <tr>
                    <th>ご住所</th>
                    <td>
                        〒<input type="tel" class="yuubin" id="zip" v-on:change="zipFunc($event)">
                        <p class="err" v-if="zipErr">半角数字で入力してください。</p>
                        <input type="text" id="address" v-model="address">
                        <p>※郵便番号を入力すると自動で町名まで入力されます。</p>
                    </td>
                </tr>
                <tr>
                    <th>来店人数</th>
                    <td>
                        大人：
                        <select v-model="adult" v-on:change="totalPrice">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select> 人　
                        子ども：
                        <select v-model="child" v-on:change="totalPrice">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select> 人
                    </td>
                </tr>
                <tr>
                    <th>ご予約日時</th>
                    <td>
                        日付：<datepicker class="datepicker"
                          :format="DatePickerFormat"
                          :language="ja"
                          :disabled-dates="state.disabledDates"
                          @selected="dateFunc"
                          placeholder="日付を選択してください">
                        </datepicker>
                        <br class="pc_off"><span class="pc_off">時間：</span><select v-model="time">
                            <option value="0">選択してください</option>
                            <option value="17">17:00</option>
                            <option value="18">18:00</option>
                            <option value="19">19:00</option>
                            <option value="20">20:00</option>
                            <option value="21" :class="{last_time: lastShow}">21:00</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>ご予約コース</th>
                    <td>
                        <select v-model="course" v-on:change="totalPrice">
                            <option value="0">選択してください</option>
                            <option value="3500">門庭厳選コース</option>
                            <option value="5000">門庭贅沢コース</option>
                            <option value="6000">門庭究極の赤身コース</option>
                            <option value="8000">最高峰の極みコース</option>
                        </select>
                        <p>※コース内容のご確認は<a href="index.html#course" target="_blank">こちら</a>。</p>
                    </td>
                </tr>
            </table>
            <div class="sum_box">
                <p>お支払予定金額：{{ totalPrice() | number_format }}円</p>
            </div>
            <button class="conf_btn">ご入力内容確認</button>
        </form>
    </div>
  </section>
</template>

<script>
// datepicker読み込み
import Datepicker from 'vuejs-datepicker'
import {ja} from 'vuejs-datepicker/dist/locale'

// zipcodeja読み込み
import zipcodeJa from 'zipcode-ja';

export default {
  data: () => {
    return {
      // フォーム用
      name: '',
      nameErr: false,
      tel: '',
      telErr: false,
      adult: 0,
      child: 0,
      time: 0,
      course: 0,
      date: '',
      value2: '',
      lastShow: false,
      // ここからdatepicker用
      //フォーマット
      DatePickerFormat: 'yyyy/MM/dd',
      //日本語化
      ja:ja,
      // 定休日（月曜日）と今日以前の日付を選択できないようにする
      state: {
        disabledDates: {
          to: new Date(),
          days: [1]
        }
      },
      // ここからzipcodeJa
      address: '',
      zipErr: false
    }
  },
  components: {
    Datepicker
  },
  filters: {
    number_format: function (val) {
      return val.toLocaleString();
    }
  },
  methods: {
    // 名前のバリデーションチェック
    nameCheck: function () {
      if (!this.name.match(/[0-9０-９ -/:-\[-~！-／：-＠［-｀｛-～、-〜”’・]/)) {
        this.nameErr = false;
      } else {
        this.nameErr = true;
      }
    },
    // 電話番号のバリデーションチェック
    telCheck: function () {
      if (this.tel.match(/^[0-9]+$/)) {
        this.telErr = false;
      } else {
        this.telErr = true;
      }
    },
    // 日付をYYYY-MM-DD形式に変換
    formatDate: function (dt) {
      let y = dt.getFullYear();
      let m = ('00' + (dt.getMonth() + 1)).slice(-2);
      let d = ('00' + dt.getDate()).slice(-2);
      let result = y + '-' + m + '-' + d;
      return result;
    },
    // 合計金額を表示
    totalPrice: function () {
      return (parseInt(this.course) * (parseInt(this.adult) + parseInt(this.child)));
    },
    // 日曜日の場合は予約可能時間を変更する
    dateFunc: function(day) {
      console.log(day)
      if (day.getDay() === 0){
        this.lastShow = true;
      } else {
        this.lastShow = false;
      }
    },
    // 郵便番号から住所を自動入力
    zipFunc: function(event) {
      let zip = event.target.value.replace(/-/g, '');

      // 郵便番号のバリデーションチェック
      if (!zip.match(/^[0-9]+$/)) {
        this.zipErr = true;
        return
      } else {
        this.zipErr = false;
        this.address = zipcodeJa[zip].address.join('')
      }
    }
  }
}
</script>

<style>
/*-------------------------
  予約フォーム
-------------------------*/
.reserve_form {
  margin: 0 0 40px 0;
}

.reserve_form img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin: 0 0 20px 0;
}

.reserve_form table{
  width: 100%;
  margin: 0 0 20px 0;
}

.reserve_form table th{
  width: 30%;
}

.reserve_form table th,
.reserve_form table td {
  padding: 15px;
}

input[type=text] {
  width: 100%;
}
input.half {
  width: 50%;
}
input.yuubin {
  width: 30%;
  margin: 0 5px 5px 0;
}

input,
select {
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 5px 10px;
  outline: none;
}

select {
  padding: 7px 10px;
}

.reserve_form table button.auto:hover,
.reserve_form .conf_btn:hover {
  opacity: 0.8;
}

.reserve_form table p {
  font-size: 1.2rem;
  font-weight: bold;
}

.reserve_form table p a {
text-decoration: underline;
}

.reserve_form table p.err {
  color: #f00;
  margin: 0 0 5px;
}

.reserve_form .sum_box {
  width: 40%;
  margin: 0 auto 20px;
  padding: 20px;
  text-align: center;
  background: rgba(255,255,255,0.6);
  border: 1px solid #594c36;
  border-radius: 50em;
  position: relative;
}

.reserve_form .sum_box::before,
.reserve_form .sum_box::after {
  content:'';
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background: #594c36;
  border-radius: 50em;
}

.reserve_form .sum_box::after {
  right: 10px;
  left: unset;
}

.reserve_form .conf_btn {
  display: block;
  width: 60%;
  margin: 0 auto;
  padding: 20px;
  border: 0;
  background: #594c36;
  color: #fff;
  outline: none;
  transition: .5s;
}

.last_time {
  display: none;
}

.datepicker {
  width: 40%;
  display: inline-block;
  margin: 0 5px 0 0;
}

.datepicker input {
  padding: 6.25px 10px;
}

@media screen and (max-width: 768px) {
  .reserve_form table th,
  .reserve_form table td {
    width: 100%;
    display: block;
  }
  .reserve_form table th {
    padding: 20px 0 5px;
  }
  .reserve_form table td {
    padding: 0 0 20px;
  }
  input.half {
    width: 100%;
  }
  input.yuubin {
    width: 40%;
  }
  .reserve_form .sum_box {
    width: 90%;
  }
  .datepicker {
  width: auto;
  display: inline-block;
  margin: 0 0 5px 0;
}
}

/*-------------------------
  レスポンシブ用
-------------------------*/
.pc_off {
  display: none;
}

@media screen and (max-width: 768px) {
  .pc_off {
    display: inline-block;
  }
}
</style>
