import { sideBar } from "./CommonElement.js"
// Main content
const mainContent = `
    <div class="right-container">
        <h3 class="title-content">Thông tin tài khoản</h3>
        <div class="account-infor">
            <form action="">
                <div class="form-control">
                    <label for="" class="input-label">
                        Họ & tên
                    </label>
                    <input type="text" placeholder="Thêm họ tên" class="input-field">
                </div>
                <div class="form-control">
                    <label for="" class="input-label">
                        Email
                    </label>
                    <input type="email" placeholder="Thêm email" class="input-field">
                </div>
                
                <div class="form-control">
                    <label for="" class="input-label">
                        Số điện thoại
                    </label>
                    <input type="phone" placeholder="Thêm số điện thoại" class="input-field">
                </div>
                <div class="form-control">
                    <label for="" class="input-label">
                        Địa chỉ giao hàng
                    </label>
                    <input type="phone" placeholder="Địa chỉ" class="input-field">
                </div>
                <div class="form-control">
                    <label for="" class="input-label">
                        Ngày sinh
                    </label>
                    <input type="date" placeholder="Thêm ngày sinh" class="input-field">
                </div>

                <div class="form-control">
                    <label for="" class="input-label">
                        Giới tính
                    </label>

                    <input type="radio" name="gender" value="male" checked class="input-radio"> Nam
                    <input type="radio" name="gender" value="female" class="input-radio"> Nữ
                    <input type="radio" name="gender" value="other" class="input-radio"> Khác

                </div>

                <button class="btn-update">Cập nhật</button>
            </form>
        </div>
    </div>
`
const customContainer = `
    <div class="content">
        <div class="container">
            <div class="box">
                <div class="row-account">
                    ${sideBar}
                    ${mainContent}
                </div>
            </div>
        </div>
    </div>
`
document.getElementById('custom-container').innerHTML = customContainer