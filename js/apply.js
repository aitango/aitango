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
                <input type="tel" id="contact" inputmode="numeric" class="form-input bg-transparent md:w-1/2" placeholder="연락처를 입력해 주세요. (ex: 01012345678)" maxlength="11" />
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

    // 연락처 입력 필드에 숫자만 입력되도록 제한
    const contactInput = document.getElementById('contact');
    contactInput.addEventListener('input', (e) => {
        // 숫자가 아닌 모든 문자 제거 (하이픈, 공백 등 포함)
        e.target.value = e.target.value.replace(/[^0-9]/g, '');

        // 최대 11자리로 제한 (010-1234-5678 형식)
        if (e.target.value.length > 11) {
            e.target.value = e.target.value.slice(0, 11);
        }
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

        // Edge Functions 호출 (실패해도 신청은 완료됨)
        try {
            await Promise.allSettled([
                handleEdgeFunctions('tango-slack', 'Slack', formData),
                handleEdgeFunctions('tango-google-sheet', 'Google Sheets', formData),
                handleEdgeFunctions('tango-welcome-email', 'Gmail', formData)
            ]);
        } catch (error) {
            console.warn('Edge Functions 호출 중 일부 오류 발생 (신청은 정상 접수됨):', error);
        }

        // 모달 표시
        showSuccessModal(formData);

        form.reset();
        conferenceHistoryDiv.classList.add('hidden');
        conferenceCheckboxes.forEach(cb => cb.disabled = true);
        submitBtn.disabled = true;
    };

    const handleEdgeFunctions = async (functionName = '', serviceName = '', body) => {
        if (!functionName) return;

        try {
            const {data, error: fnError} = await supabase.functions.invoke(functionName, {
                body: body,
            });

            if (fnError) {
                console.warn(`${serviceName} 연동 실패:`, fnError.message);
            } else {
                console.log(`${serviceName} 연동 성공`);
            }
        } catch (error) {
            // CORS 에러 등의 네트워크 오류 처리
            console.warn(`${serviceName} 호출 오류 (무시됨):`, error.message);
        }
    };

    const showSuccessModal = (formData) => {
        // 참여 이력 텍스트 생성
        let attendedText = '없음';
        if (formData.attended !== '0') {
            const conferences = formData.attended.split(',');
            attendedText = conferences.map(num => `제 ${num}회`).join(', ') + ' 참여';
        }

        // 모달 HTML 생성
        const modalHTML = `
            <div id="success-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                    <!-- 모달 헤더 -->
                    <div class="bg-gradient-to-r from-[#70A8A9] to-[#245A5E] text-white p-6 rounded-t-2xl">
                        <div class="flex items-center gap-3">
                            <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <div>
                                <h2 class="text-2xl font-bold">신청 접수 완료</h2>
                                <p class="text-sm opacity-90 mt-1">2025 TANGO 커뮤니티 제4회 컨퍼런스</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 모달 바디 -->
                    <div class="p-8">
                        <p class="text-gray-600 mb-6 text-center">
                            신청이 정상적으로 접수되었습니다.<br>
                            입력하신 정보는 다음과 같습니다.
                        </p>
                        
                        <div class="bg-bglv1 rounded-xl p-6 space-y-4">
                            <div class="flex border-b border-[#C7DEE0] pb-3">
                                <span class="font-semibold text-primaryDark w-32">성함</span>
                                <span class="text-gray-700">${formData.name}</span>
                            </div>
                            <div class="flex border-b border-[#C7DEE0] pb-3">
                                <span class="font-semibold text-primaryDark w-32">소속/단체</span>
                                <span class="text-gray-700">${formData.organization}</span>
                            </div>
                            <div class="flex border-b border-[#C7DEE0] pb-3">
                                <span class="font-semibold text-primaryDark w-32">직급</span>
                                <span class="text-gray-700">${formData.position}</span>
                            </div>
                            <div class="flex border-b border-[#C7DEE0] pb-3">
                                <span class="font-semibold text-primaryDark w-32">이메일</span>
                                <span class="text-gray-700">${formData.email}</span>
                            </div>
                            <div class="flex border-b border-[#C7DEE0] pb-3">
                                <span class="font-semibold text-primaryDark w-32">연락처</span>
                                <span class="text-gray-700">${formData.contact}</span>
                            </div>
                            <div class="flex">
                                <span class="font-semibold text-primaryDark w-32">참여 이력</span>
                                <span class="text-gray-700">${attendedText}</span>
                            </div>
                        </div>
                        
                        <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <p class="text-sm text-blue-800">
                                <strong>📧 안내:</strong> 소중한 시간을 내어 신청해주셔서 감사합니다.<br>
                            </p>
                        </div>
                    </div>
                    
                    <!-- 모달 푸터 -->
                    <div class="p-6 border-t border-gray-200">
                        <button id="close-modal-btn" class="w-full bg-secondary hover:bg-secondaryLight text-white font-bold py-3 px-6 rounded-lg transition duration-200">
                            확인
                        </button>
                    </div>
                </div>
            </div>
        `;

        // 모달을 body에 추가
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // 모달 닫기 이벤트
        const modal = document.getElementById('success-modal');
        const closeBtn = document.getElementById('close-modal-btn');

        closeBtn.addEventListener('click', () => {
            modal.remove();
        });

        // 모달 배경 클릭 시 닫기
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });

        // ESC 키로 닫기
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                modal.remove();
                document.removeEventListener('keydown', handleEsc);
            }
        };
        document.addEventListener('keydown', handleEsc);
    };
}