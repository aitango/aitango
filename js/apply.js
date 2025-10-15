function initApplyPage() {
    const applyFormContainer = document.getElementById("apply-form");
    if (!applyFormContainer) return;

    applyFormContainer.innerHTML = `
        <style>
            .form-input {
                border: 0;
                border-radius: 0;
                padding: 8px 12px;
                width: 100%;
                background: linear-gradient(149deg, rgba(210, 30, 68, 1) 30%, rgba(162, 193, 57, 1) 31%) bottom / 100% 2px no-repeat;
                background-color: transparent;
            }
            
            .form-input:focus {
                outline: none;
            }
            
            .form-label {
                font-weight: 600;
                display: block;
            }
            
            .required-mark {
                color: #D21E44;
                margin-left: 4px;
            }
            
            #registration-form>div>div,
            #registration-form>div input {
                flex: 1;
            }
            
            #registration-form>div>label {
                flex: 1;
                align-content: center;
            }
            
            input[type="checkbox"],
            input[type="radio"] {
                accent-color: #70A8A9;
            }
        </style>
        <form id="registration-form" class="space-y-8 mt-32">
            <!-- 1. 참여 경험 -->
            <div class="flex flex-col md:flex-row md:items-center gap-4">
                <label class="form-label md:w-1/2 text-lg">TANGO 커뮤니티 컨퍼런스에 참여한 경험이 있으신가요?<span class="required-mark">*</span></label>
                <div class="flex flex-col items-start md:w-1/2">
                    <div class="flex gap-7">
                        <label class="flex items-center">
                            <input type="radio" name="attendance" value="yes" class="mr-2" />
                            있음
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="attendance" value="no" class="mr-2" checked />
                            없음
                        </label>
                    </div>
                    <div>
                        <div id="conference-history" class="flex gap-7 mt-4 hidden">
                            <label class="flex items-center">
                                <input type="checkbox" name="conference" value="1" class="mr-2" disabled />
                                제 1회 참여
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="conference" value="2" class="mr-2" disabled />
                                제 2회 참여
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="conference" value="3" class="mr-2" disabled />
                                제 3회 참여
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 2. 성함 -->
            <div class="flex flex-col md:flex-row md:items-center gap-4">
                <label for="name" class="form-label md:w-1/2 text-lg">성함(이름)<span class="ml-2 text-secondary">*</span></label>
                <input type="text" id="name" class="form-input bg-transparent md:w-1/2" placeholder="성함(이름)을 입력해 주세요." />
            </div>
    
            <!-- 3. 소속/단체 -->
            <div class="flex flex-col md:flex-row md:items-center gap-4">
                <label for="organization" class="form-label md:w-1/2 text-lg">소속/단체<span class="ml-2 text-secondary">*</span></label>
                <input type="text" id="organization" class="form-input bg-transparent md:w-1/2" placeholder="소속/단체를 입력해 주세요." />
            </div>
    
            <!-- 4. 직급 -->
            <div class="flex flex-col md:flex-row md:items-center gap-4">
                <label for="position" class="form-label md:w-1/2 text-lg">직급<span class="ml-2 text-secondary">*</span></label>
                <input type="text" id="position" class="form-input bg-transparent md:w-1/2" placeholder="직급을 입력해 주세요." />
            </div>
    
            <!-- 5. 이메일 -->
            <div class="flex flex-col md:flex-row md:items-center gap-4">
                <label for="email" class="form-label md:w-1/2 text-lg">이메일(E-mail)<span class="ml-2 text-secondary">*</span></label>
                <input type="email" id="email" class="form-input bg-transparent md:w-1/2" placeholder="이메일(E-mail)을 입력해 주세요." />
            </div>
    
            <!-- 6. 연락처 -->
            <div class="flex flex-col md:flex-row md:items-center gap-4">
                <label for="contact" class="form-label md:w-1/2 text-lg">연락처<span class="ml-2 text-secondary">*</span> <span class="text-sm text-gray-400 font-normal">(경품 문자메시지 수신용)</span></label>
                <input type="tel" id="contact" class="form-input bg-transparent md:w-1/2" placeholder="연락처를 입력해 주세요. (ex: 01012345678)" />
            </div>
    
            <!-- 7. 개인정보 수집 이용 목적 -->
            <div class="pt-10">
                <label class="form-label text-xl">개인정보 수집 이용 목적</label>
                <div class="bg-bglv1 p-4 rounded-md text-sm mt-4">
                    <table class="w-full text-left">
                        <tbody class="divide-y divide-[#C7DEE0]">
                            <tr>
                                <td class="p-4 font-semibold text-primaryDark w-1/3">개인정보의 수집 이용 목적</td>
                                <td class="p-4 text-black/60">컨퍼런스 신청 확인, 공지사항 전달, 경품 발송</td>
                            </tr>
                            <tr>
                                <td class="p-4 font-semibold text-primaryDark">수집 항목</td>
                                <td class="p-4 text-black/60">성함, 소속/단체, 직급, 이메일, 연락처, 컨퍼런스 참여이력</td>
                            </tr>
                            <tr>
                                <td class="p-4 font-semibold text-primaryDark">개인정보의 보유 및 이용기간</td>
                                <td class="p-4 text-black/60">컨퍼런스 종료 후 1년</td>
                            </tr>
                            <tr>
                                <td class="p-4 font-semibold text-primaryDark">동의를 거부할 권리 및<br /> 동의를 거부할 경우의 불이익</td>
                                <td class="p-4 text-black/60">귀하는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다.<br />다만, 동의를 거부할 경우 컨퍼런스 참여 신청이 제한될 수 있습니다.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="mt-8 flex justify-center">
                    <label class="text-lg">
                        <input type="checkbox" id="privacy-consent" class="mr-2" />
                        위 개인정보 수집 및 이용에 동의합니다.
                    </label>
                </div>
            </div>
    
            <!-- 제출 버튼 -->
            <div class="text-center pt-4">
                <span id="submit-wrapper">
                    <button type="button" id="submit-btn"
                        class="bg-secondary text-white font-bold py-3 px-12 rounded-lg disabled:bg-[#E699A9] disabled:cursor-not-allowed transition" disabled>
                        신청 접수
                    </button>
                </span>
            </div>
        </form>
  `;

    // --- Supabase Client Setup ---
    const supabaseUrl = 'https://zyfasdybhilthzyuispc.supabase.co';
    const supabaseAnonKey = 'sb_publishable_FunAFiBUAcXxvSFhcgd6wg_xHJ8n1m_';
    const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonKey);

    // --- DOM Elements ---
    const form = document.getElementById('registration-form');
    const attendanceRadios = document.getElementsByName('attendance');
    const conferenceHistoryDiv = document.getElementById('conference-history');
    const conferenceCheckboxes = document.getElementsByName('conference');
    const privacyConsent = document.getElementById('privacy-consent');
    const submitBtn = document.getElementById('submit-btn');

    // --- Event Listeners ---
    attendanceRadios.forEach((radio) => {
        radio.addEventListener('change', (e) => {
            const isYes = e.target.value === 'yes';
            conferenceHistoryDiv.classList.toggle('hidden', !isYes);
            conferenceCheckboxes.forEach((checkbox) => {
                checkbox.disabled = !isYes;
                if (!isYes) {
                    checkbox.checked = false;
                }
            });
        });
    });

    privacyConsent.addEventListener('change', () => {
        submitBtn.disabled = !privacyConsent.checked;
    });

    submitBtn.addEventListener('click', () => {
        // alert("2025 TANGO 사전 등록 접수가 곧 시작될 예정입니다.");
        onSubmit();
    });

    // --- Functions ---
    const validateAndFocus = (element, message) => {
        if (!element.value.trim()) {
            alert(message);
            element.focus();
            return false;
        }
        return true;
    };

    const validateEmail = (element) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(element.value.trim())) {
            alert('유효한 이메일 주소를 입력해주세요.');
            element.focus();
            return false;
        }
        return true;
    };

    const validateContact = (element) => {
        // Remove dashes
        element.value = element.value.replace(/-/g, '');
        const contactRegex = /^010\d{8}$/;
        if (!contactRegex.test(element.value.trim())) {
            alert('유효한 연락처를 입력해주세요. (ex: 01012345678)');
            element.focus();
            return false;
        }
        return true;
    };

    const onSubmit = async () => {
        function generateRandomString(length = 6) {
            const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            let result = "";
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * chars.length);
                result += chars[randomIndex];
            }
            return result;
        }

        const nameEl = document.getElementById('name');
        const organizationEl = document.getElementById('organization');
        const positionEl = document.getElementById('position');
        const emailEl = document.getElementById('email');
        const contactEl = document.getElementById('contact');

        if (!validateAndFocus(nameEl, '성함(이름)을 입력해 주세요.')) return;
        if (!validateAndFocus(organizationEl, '소속/단체를 입력해 주세요.')) return;
        if (!validateAndFocus(positionEl, '직급을 입력해 주세요.')) return;
        if (!validateAndFocus(emailEl, '이메일을 입력해 주세요.')) return;
        if (!validateEmail(emailEl)) return;
        if (!validateContact(contactEl)) return;

        const hasAttended = document.querySelector('input[name="attendance"]:checked').value === 'yes';
        let attended = '0';
        if (hasAttended) {
            const attendedConferences = Array.from(conferenceCheckboxes)
                .filter(checkbox => checkbox.checked)
                .map(checkbox => checkbox.value);
            if (attendedConferences.length > 0) {
                attended = attendedConferences.join(',');
            }
        }

        const formData = {
            uuid: generateRandomString(),
            name: nameEl.value,
            organization: organizationEl.value,
            position: positionEl.value,
            email: emailEl.value,
            contact: contactEl.value,
            attended: attended,
        };

        // DB insert
        const {error} = await supabase
            .from('tango')
            .insert([formData]);

        if (error) {
            console.error(error.message);
            alert('신청 접수에 실패했습니다.');
            return;
        }

        handleEdgeFunctions('tango-slack', 'Slack', formData);
        handleEdgeFunctions('tango-google-sheet', 'Google Sheets', formData);
        handleEdgeFunctions('tango-welcome-email', 'Gmail', formData);

        alert('신청 접수가 완료되었습니다.');
        form.reset();

        conferenceHistoryDiv.classList.add('hidden');
        conferenceCheckboxes.forEach(cb => cb.disabled = true);
        submitBtn.disabled = true;
    };

    const handleEdgeFunctions = async (functionName = '', serviceName = '', body) => {
        if (!functionName) return;

        const {error: fnError} = await supabase.functions.invoke(functionName, {
            body: body,
        });

        if (fnError)
            console.error(`${serviceName} 연동 실패:`, fnError.message);
    };
}